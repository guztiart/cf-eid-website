# Email Configuration Setup

This guide explains how to configure SMTP email notifications for the EID Website contact form.

## Overview

When a user submits the inquiry form, the system will:
1. Save the inquiry to the MySQL database
2. Send an email notification to agustiar.fajar@ekkeagle.com
3. Send a confirmation email to the user who submitted the form

## Setup Instructions

### 1. Create Environment Variables

Create a `.env` file in the root directory of your project (same level as `.env.example`) and add the following configuration:

```bash
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=eid_website

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Server Configuration
PORT=5000
```

### 2. Gmail SMTP Setup (Recommended)

If using Gmail as your SMTP server:

1. Enable 2-Factor Authentication on your Google Account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this app password in the SMTP_PASS field

3. Update your `.env` file:
   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-gmail-address@gmail.com
   SMTP_PASS=your-16-character-app-password
   ```

### 3. Alternative SMTP Providers

You can use other SMTP providers by updating the configuration:

#### Outlook/Hotmail:
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

#### Yahoo Mail:
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

#### Custom SMTP Server:
```bash
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
```

### 4. Test the Configuration

1. Start the server:
   ```bash
   npm run dev
   ```

2. Fill out the contact form on the website

3. Check:
   - The database for the new record
   - Email notification at agustiar.fajar@ekkeagle.com
   - Confirmation email in the submitter's inbox

## Email Templates

### Notification Email (to agustiar.fajar@ekkeagle.com)
- Subject: "New Inquiry: [subject from form]"
- Contains: Name, Email, Subject, Message
- Styled HTML format

### Confirmation Email (to user)
- Subject: "Thank you for your inquiry - Eagle Industry Indonesia"
- Contains: Thank you message and contact information
- Styled HTML format

## Troubleshooting

### Common Issues:

1. **Authentication Failed**: Check your SMTP credentials and ensure you're using an app password for Gmail
2. **Connection Refused**: Verify SMTP host and port settings
3. **Email Not Sending**: Check console logs for error messages
4. **Spam Filter**: Ensure your email content doesn't trigger spam filters

### Debug Mode:

To enable detailed logging, add this to your server.js:
```javascript
// After requiring nodemailer
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Only for development
```

## Security Notes

1. Never commit your `.env` file to version control
2. Use app passwords instead of regular passwords for Gmail
3. Consider using a dedicated email account for transactional emails
4. In production, use a professional email service like SendGrid, Mailgun, or AWS SES

## Production Considerations

For production deployment, consider:

1. Using a professional email service (SendGrid, Mailgun, etc.)
2. Implementing email queueing for high volume
3. Adding email analytics and tracking
4. Setting up bounce and complaint handling
5. Using environment-specific configurations

## Files Modified

- `server.js` - Added email sending functionality
- `config/email.js` - Email configuration and templates
- `.env.example` - Environment variables template
- `package.json` - Added nodemailer and dotenv dependencies