import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = 'mbote@tselem.studio';

if (!RESEND_API_KEY) {
  console.warn('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(RESEND_API_KEY);

export function getResendClient() {
  return {
    client: resend,
    fromEmail: FROM_EMAIL
  };
}

export async function sendContactNotificationEmail(contactData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  if (!RESEND_API_KEY) {
    console.error('Cannot send email: RESEND_API_KEY is not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const { client, fromEmail } = getResendClient();
    
    const htmlContent = `
      <h2>Nouveau message de contact - TSELEM</h2>
      <p><strong>De:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      ${contactData.phone ? `<p><strong>Téléphone:</strong> ${contactData.phone}</p>` : ''}
      <p><strong>Sujet:</strong> ${contactData.subject}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${contactData.message.replace(/\n/g, '<br>')}</p>
      <hr />
      <p style="color: #666; font-size: 12px;">
        Ce message a été envoyé depuis le formulaire de contact du site TSELEM.
      </p>
    `;

    await client.emails.send({
      from: fromEmail,
      to: 'contact@tselemrdc.com',
      subject: `Nouveau contact: ${contactData.subject}`,
      html: htmlContent,
      replyTo: contactData.email,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
