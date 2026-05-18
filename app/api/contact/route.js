import { NextResponse } from 'next/server';
import { sendInquiryEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required: name, email, subject, message' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Log submission
    console.log('📝 Contact form submission received:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    });

    // Send inquiry email via AWS SES
    const result = await sendInquiryEmail({
      name,
      email,
      phone: phone || null,
      subject,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your inquiry has been sent successfully. We will get back to you soon.',
        messageId: result.messageId,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working' },
    { status: 200 }
  );
}
