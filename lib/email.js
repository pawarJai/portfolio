import nodemailer from 'nodemailer';

// AWS SES SMTP Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // false for 587, true for 465
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

/**
 * Build HTML email template
 * @param {Object} data - Email data {name, email, phone, subject, message}
 * @returns {string} HTML email template
 */
function buildHtmlTemplate(data) {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            📬 New Inquiry from aakshiv.com
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 120px; background: #f9fafb;">Name:</td>
              <td style="padding: 10px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; background: #f9fafb;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; background: #f9fafb;">Phone:</td>
              <td style="padding: 10px;">${data.phone}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px; font-weight: bold; background: #f9fafb;">Subject:</td>
              <td style="padding: 10px;">${data.subject}</td>
            </tr>
          </table>
          <h3 style="color: #374151; margin-top: 30px;">Message:</h3>
          <div style="background: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px; white-space: pre-wrap; word-wrap: break-word;">
${data.message}
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px; text-align: center;">
            💡 Tip: Click "Reply" to respond directly to ${data.name}.
          </p>
        </div>
      </body>
    </html>
  `;
}

/**
 * Build plain text email template
 * @param {Object} data - Email data
 * @returns {string} Plain text email
 */
function buildTextTemplate(data) {
  return `
New Inquiry from aakshiv.com
============================

Name:    ${data.name}
Email:   ${data.email}
${data.phone ? `Phone:   ${data.phone}\n` : ''}Subject: ${data.subject}

Message:
--------
${data.message}

---
Reply directly to this email to respond to ${data.name}.
  `.trim();
}

/**
 * Send inquiry email via AWS SES
 * @param {Object} data - {name, email, phone?, subject, message}
 * @returns {Promise<Object>} {success: boolean, message: string}
 */
export async function sendInquiryEmail(data) {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error('Missing required fields: name, email, subject, message');
    }

    // Prepare email options
    const mailOptions = {
      from: `Aakshiv Contact Form <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: data.email, // KEY: replies go to the visitor
      subject: `📬 New Inquiry: ${data.subject}`,
      text: buildTextTemplate(data),
      html: buildHtmlTemplate(data),
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Inquiry email sent:', {
      messageId: info.messageId,
      from: data.email,
      to: process.env.TO_EMAIL,
      subject: data.subject,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      message: 'Inquiry sent successfully!',
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('❌ Email sending error:', {
      error: error.message,
      code: error.code,
      timestamp: new Date().toISOString(),
    });

    throw new Error(`Failed to send email: ${error.message}`);
  }
}

/**
 * Verify SMTP connection (for testing)
 * @returns {Promise<boolean>}
 */
export async function verifySmtpConnection() {
  try {
    await transporter.verify();
    console.log('✅ SMTP connection verified');
    return true;
  } catch (error) {
    console.error('❌ SMTP connection failed:', error.message);
    return false;
  }
}
