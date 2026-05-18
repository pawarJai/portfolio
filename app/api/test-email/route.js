import { NextResponse } from 'next/server';
import { verifySmtpConnection, sendInquiryEmail } from '@/lib/email';

export async function GET() {
  try {
    console.log('🧪 Testing SMTP connection...');

    const isConnected = await verifySmtpConnection();

    if (!isConnected) {
      return NextResponse.json(
        {
          success: false,
          message: 'SMTP connection failed. Check your credentials.',
          checks: {
            smtpConnection: '❌ Failed',
          },
        },
        { status: 500 }
      );
    }

    // Send test email
    console.log('📤 Sending test email...');
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: '🧪 Test Email from aakshiv.com',
      message: 'This is a test email to verify your AWS SES SMTP setup is working correctly.',
    };

    const result = await sendInquiryEmail(testData);

    return NextResponse.json(
      {
        success: true,
        message: 'Test email sent successfully!',
        checks: {
          smtpConnection: '✅ Connected',
          emailSending: '✅ Working',
        },
        details: {
          messageId: result.messageId,
          from: process.env.FROM_EMAIL,
          to: process.env.TO_EMAIL,
          replyTo: 'test@example.com',
        },
        instructions: [
          '✅ Your SMTP setup is working!',
          '📧 Check your inbox at ' + process.env.TO_EMAIL,
          '🔄 Replies will go to test@example.com',
          '🚀 You can now use the contact form',
        ],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Test failed:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Test email failed',
        error: error.message,
        checks: {
          smtpConnection: '❌ Failed',
          emailSending: '❌ Failed',
        },
        debugging: {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          fromEmail: process.env.FROM_EMAIL,
          toEmail: process.env.TO_EMAIL,
          credentialsSet: {
            username: !!process.env.SMTP_USERNAME,
            password: !!process.env.SMTP_PASSWORD,
          },
        },
      },
      { status: 500 }
    );
  }
}
