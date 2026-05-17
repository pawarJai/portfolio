import { NextResponse } from 'next/server';

// This is a basic contact API route
// For production, you would integrate with email services like:
// - Nodemailer with SMTP
// - SendGrid
// - Resend
// - EmailJS

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    // Log the contact form submission (for development)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Implement actual email sending logic here
    // Example with Nodemailer:
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: 'pawarjay1516@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    */

    // For now, simulate successful email sending
    // In production, replace this with actual email service integration
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
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