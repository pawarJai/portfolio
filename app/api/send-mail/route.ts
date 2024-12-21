import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "pawarjayesh468@gmail.com",
        pass: "dtta pjjj gfff nqdb"
      },
    });
   
    await transporter.sendMail({
      from: email,
      to: "pawarjayesh468@gmail",
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Allow": "POST, OPTIONS",
    },
  });
}
