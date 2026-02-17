# Email Contact Form Setup Instructions

Your portfolio now includes a fully functional contact form that will send emails directly to **gandijahnavi886@gmail.com** when visitors submit the form.

## Setup Steps

Follow these steps to enable email functionality:

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add an Email Service

1. Log into your EmailJS dashboard
2. Go to "Email Services" in the sidebar
3. Click "Add New Service"
4. Choose Gmail (or your preferred email service)
5. Connect your Gmail account (gandijahnavi886@gmail.com)
6. Note down your **Service ID** (e.g., "service_abc123")

### 3. Create an Email Template

1. Go to "Email Templates" in the sidebar
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Make sure these variable names match:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `subject` - Subject line
   - `message` - Message content

5. Note down your **Template ID** (e.g., "template_xyz789")

### 4. Get Your Public Key

1. Go to "Account" → "General" in the sidebar
2. Find your **Public Key** (e.g., "your_public_key_here")
3. Copy this key

### 5. Update the Code

Open `components/Contact.tsx` and replace these values (around lines 9-11):

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### 6. Test the Contact Form

1. Save all files
2. The development server should automatically reload
3. Scroll to the Contact section
4. Fill out the form with test data
5. Click "Send Message"
6. Check gandijahnavi886@gmail.com for the test email

## Features of Your Contact Form

✓ **Email Notifications** - Receives emails directly to gandijahnavi886@gmail.com
✓ **Form Validation** - All fields are required
✓ **Loading State** - Shows "Sending..." while submitting
✓ **Success Message** - Displays confirmation when email is sent
✓ **Error Handling** - Shows error message if sending fails
✓ **Mobile Responsive** - Works perfectly on all devices
✓ **Disabled State** - Prevents duplicate submissions

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

This should be more than enough for a portfolio website!

## Troubleshooting

**Problem:** Emails not being received
- Check your spam folder
- Verify Service ID, Template ID, and Public Key are correct
- Make sure your email service is connected in EmailJS dashboard

**Problem:** Form showing error
- Check browser console for error messages
- Verify internet connection
- Confirm EmailJS account is active

## Alternative: Direct Email Link

If you prefer not to use EmailJS, the contact form will still show your email address with a direct mailto link that visitors can click to open their email client.

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: support@emailjs.com
