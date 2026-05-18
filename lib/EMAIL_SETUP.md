# 📧 Email Setup Guide - AWS SES SMTP

This portfolio uses **AWS SES SMTP** to send inquiry emails from the contact form.

## 📁 File Structure

```
project/
├── lib/
│   ├── email.js              ← Email utility functions (reusable)
│   └── EMAIL_SETUP.md        ← This file
├── app/api/
│   ├── contact/route.js      ← Contact form API (uses email utility)
│   └── test-email/route.js   ← Email testing endpoint
└── .env.local                ← AWS SES credentials (NEVER commit this!)
```

## 🔧 Configuration

### 1. Set up `.env.local`

Create `.env.local` in the root directory with your AWS SES SMTP credentials:

```env
SMTP_HOST="email-smtp.ap-south-1.amazonaws.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USERNAME="your-smtp-username"
SMTP_PASSWORD="your-smtp-password"
FROM_EMAIL="your-verified-email@aakshiv.com"
TO_EMAIL="your-inbox@aakshiv.com"
```

**Important:** 
- `FROM_EMAIL` must be verified in AWS SES
- `TO_EMAIL` is where you receive inquiries
- Never commit `.env.local` to Git (it's in `.gitignore`)

### 2. Install Nodemailer

```bash
npm install nodemailer
```

## 🚀 Usage

### In Your Contact Form

```jsx
// Example: Handle form submission
const handleSubmit = async (formData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone, // optional
      subject: formData.subject,
      message: formData.message,
    }),
  });

  const data = await response.json();
  if (data.success) {
    console.log('✅ Inquiry sent!');
  } else {
    console.error('❌ Error:', data.error);
  }
};
```

### In Your API Routes

```javascript
// Import the utility function
import { sendInquiryEmail } from '@/lib/email';

// Use it anywhere
const result = await sendInquiryEmail({
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Project Inquiry',
  message: 'I have a project...',
  phone: '+91-123-456-7890', // optional
});

console.log(result.messageId); // AWS SES message ID
```

## 🧪 Testing

### Test Email Endpoint

Visit this URL in your browser or make a GET request:

```
http://localhost:3000/api/test-email
```

**Response (success):**
```json
{
  "success": true,
  "message": "Test email sent successfully!",
  "checks": {
    "smtpConnection": "✅ Connected",
    "emailSending": "✅ Working"
  }
}
```

**Response (failure):**
```json
{
  "success": false,
  "error": "Authentication failed: Invalid credentials",
  "checks": {
    "smtpConnection": "❌ Failed",
    "emailSending": "❌ Failed"
  }
}
```

## 📋 API Endpoints

### POST `/api/contact`

**Request:**
```json
{
  "name": "Jayesh Pawar",
  "email": "jayesh@example.com",
  "phone": "+91-98765-43210",
  "subject": "Project Inquiry",
  "message": "I'm interested in your services..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you! Your inquiry has been sent successfully.",
  "messageId": "000001-abc123@sns.amazonaws.com"
}
```

**Error Response (400/500):**
```json
{
  "error": "Invalid email format"
}
```

### GET `/api/test-email`

Tests your AWS SES SMTP setup and sends a test email.

**Response:** See testing section above.

## 🔐 Security Notes

✅ **Good Practices:**
- Credentials stored in `.env.local` (not in code)
- `.env.local` is in `.gitignore`
- Email validation before sending
- Sanitized HTML templates
- Reply-To header set to visitor's email

⚠️ **Keep Secure:**
- Never commit `.env.local` to Git
- Rotate credentials regularly
- Monitor AWS SES usage
- Enable AWS IAM policies for least privilege

## 🛠️ Troubleshooting

### "Authentication failed"
- Check `SMTP_USERNAME` and `SMTP_PASSWORD` in `.env.local`
- Verify credentials match your AWS SES SMTP settings
- Ensure you're in the correct AWS region

### "Email not received"
- Check `TO_EMAIL` is correct
- Verify `FROM_EMAIL` is verified in AWS SES
- Check spam/junk folders
- Monitor AWS SES bounce rates

### "SMTPAuthenticationError"
- Use test endpoint: `/api/test-email`
- Verify SMTP credentials are correct
- Ensure AWS SES is in Production Access (not Sandbox)

## 📚 Reusable Functions

The `lib/email.js` file exports these functions:

```javascript
// Send an inquiry email
export async function sendInquiryEmail(data)

// Verify SMTP connection (for testing)
export async function verifySmtpConnection()
```

You can import and use these in any Next.js component or API route.

## 🎯 Next Steps

1. ✅ Set up `.env.local` with your AWS SES credentials
2. ✅ Run `npm install nodemailer`
3. ✅ Test with `/api/test-email` endpoint
4. ✅ Connect your contact form to `/api/contact`
5. ✅ Monitor inquiries in your inbox

---

**Questions?** Check AWS SES documentation: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/
