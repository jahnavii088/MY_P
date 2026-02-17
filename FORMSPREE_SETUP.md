# Formspree Setup - Super Easy! (2 Minutes)

Your contact form is now configured to use **Formspree** - much simpler than EmailJS!

## Quick Setup Steps

### 1. Go to Formspree
Visit: **https://formspree.io/**

### 2. Sign Up
- Click "Get Started" or "Sign Up"
- Use **gandijahnavi886@gmail.com** (or any email)
- Verify your email

### 3. Create a New Form
1. Click "New Form" or "+" button
2. Enter your email: **gandijahnavi886@gmail.com**
3. Give it a name like "Portfolio Contact Form"
4. Click "Create Form"

### 4. Get Your Form Endpoint
After creating the form, you'll see an endpoint URL like:
```
https://formspree.io/f/xyzabc123
```

Copy the part after `/f/` (e.g., `xyzabc123`)

### 5. Update Your Code
Open `components/Contact.tsx` and find line 9:
```typescript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

Replace `YOUR_FORM_ID` with your actual form ID:
```typescript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzabc123';
```

### 6. Save and Test!
1. Save the file
2. Go to your portfolio contact form
3. Fill it out with test data
4. Click "Send Message"
5. Check **gandijahnavi886@gmail.com** for the email!

## ✨ What You Get (FREE Tier)

✓ **50 submissions per month** (perfect for a portfolio)
✓ **Spam filtering**
✓ **Email notifications** to gandijahnavi886@gmail.com
✓ **Form submissions dashboard**
✓ **No credit card required**

## Features Already Working

✓ Form validation
✓ Loading spinner while sending
✓ Success message confirmation
✓ Error handling
✓ Mobile responsive
✓ Professional design

## Example

If your form endpoint is `https://formspree.io/f/mrbgpqwe`, then your code should be:
```typescript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrbgpqwe';
```

That's it! Much simpler than EmailJS! 🎉

## First Submission
The first time someone submits the form, Formspree will send you a confirmation email - just click "Confirm" and you're all set!

## Need More Submissions?
If you need more than 50/month, you can upgrade later. But for a portfolio, 50 is usually plenty!
