import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const { name, email, organization, message, honeypot } = await req.json();

  // Spam protection: reject if honeypot field is filled
  if (honeypot) {
    return Response.json({ success: true }); // silently ignore bots
  }

  const users = await base44.asServiceRole.entities.User.filter({ role: "admin" });
  const adminEmail = users?.[0]?.email;

  if (!adminEmail) {
    return Response.json({ success: false, error: "No admin found" }, { status: 500 });
  }

  const body = `Name: ${name}
Email: ${email}
Organization: ${organization || "N/A"}

Message:
${message}`;

  await base44.asServiceRole.integrations.Core.SendEmail({
    to: adminEmail,
    subject: "New Website Inquiry — Africa Web3 Institute",
    body,
  });

  return Response.json({ success: true });
});