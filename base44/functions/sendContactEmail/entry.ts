import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const { name, email, organization, message, honeypot } = await req.json();

  // Spam protection: silently ignore bots
  if (honeypot) {
    return Response.json({ success: true });
  }

  // Get admin user to send to (SendEmail only works for registered app users)
  const users = await base44.asServiceRole.entities.User.filter({ role: "admin" });
  const adminEmail = users?.[0]?.email;

  if (!adminEmail) {
    return Response.json({ success: false, error: "No admin found" }, { status: 500 });
  }

  const body = `New contact form submission from the Africa Web3 Institute website.

Name: ${name}
Email: ${email}
Organization: ${organization || "N/A"}

Message:
${message}

---
Reply directly to the sender at: ${email}`;

  await base44.asServiceRole.integrations.Core.SendEmail({
    to: adminEmail,
    subject: "New Website Inquiry — Africa Web3 Institute",
    body,
  });

  return Response.json({ success: true });
});