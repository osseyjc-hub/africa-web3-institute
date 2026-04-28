import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const { name, email, organization, message } = await req.json();

  const body = `
New inquiry submitted via the Africa Web3 Institute website.

Name: ${name}
Email: ${email}
Organization: ${organization || "N/A"}
Message:
${message}
  `.trim();

  await base44.integrations.Core.SendEmail({
    to: "info@africaweb3institute.org",
    subject: "New Website Inquiry — Africa Web3 Institute",
    body,
  });

  return Response.json({ success: true });
});