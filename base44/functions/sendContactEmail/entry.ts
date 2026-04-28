import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const { name, email, organization, message } = await req.json();

  // Find the admin user to send the notification to
  const users = await base44.asServiceRole.entities.User.filter({ role: "admin" });
  const adminEmail = users?.[0]?.email;

  if (!adminEmail) {
    return Response.json({ success: false, error: "No admin found" }, { status: 500 });
  }

  const body = `
New inquiry submitted via the Africa Web3 Institute website.

Name: ${name}
Email: ${email}
Organization: ${organization || "N/A"}

Message:
${message}

---
Reply directly to: ${email}
  `.trim();

  await base44.asServiceRole.integrations.Core.SendEmail({
    to: adminEmail,
    subject: `New Website Inquiry from ${name} — Africa Web3 Institute`,
    body,
  });

  return Response.json({ success: true });
});