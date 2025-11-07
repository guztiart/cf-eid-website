# SMTP Setup Guide for EID Website

## Current Status
The email functionality has been implemented but requires proper SMTP credentials to work. The error "Invalid login: 535-5.7.8 Username and Password not accepted" indicates that Gmail is rejecting the credentials.

## Step-by-Step Gmail Setup

### 1. Enable 2-Factor Authentication (2FA)
1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left navigation
3. Under "Signing in to Google", enable "2-Step Verification"
4. Follow the setup process

### 2. Generate an App Password
1. After enabling 2FA, go back to Security settings
2. Click on "App passwords" (you may need to sign in again)
3. Under "Select app", choose "Mail"
4. Under "Select device", choose "Other (Custom name)"
5. Enter a name like "EID Website" and click "Generate"
6. Copy the 16-character password (this is what you'll use for SMTP_PASS)

### 3. Create/Update .env File
Create a `.env` file in the project root with the following:

```bash
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=eid_website

# Email Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your-16-character-app-password

# Server Configuration
PORT=5000
```

### 4. Test the Configuration
After setting up your credentials:
```bash
npm run test-email
```

## Updated Email Flow

When a user submits the inquiry form:
1. The form data is saved to the MySQL database
2. A notification email is sent to agustiar.fajar@ekkeagle.com with:
   - From: "[User Name] via EID Website" <your-smtp-email>
   - Reply-To: The user's name and email address (from the form field)
   - Subject: "New Inquiry: [subject from form]"
   - HTML-formatted content with all inquiry details
3. A confirmation email is sent to the user with:
   - Thank you message and company contact information
   - Professional HTML formatting

**Important Note**: The notification email is sent from your authenticated SMTP account for reliable delivery, but includes a "Reply-To" header with the user's email address. This allows you to directly reply to the inquiry by simply replying to the email, and it will go to the user who submitted the form.

**Why this approach?**
- SMTP servers typically reject emails sent with a "from" address that doesn't match the authenticated user
- Using Reply-To ensures reliable delivery while still allowing easy replies to the actual user
- The email clearly indicates who the original sender was in both the subject line and email body

## Alternative SMTP Providers

If you prefer not to use Gmail, here are alternatives:

### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-outlook-email@outlook.com
SMTP_PASS=your-outlook-password
```

### Yahoo Mail
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-yahoo-email@yahoo.com
SMTP_PASS=your-yahoo-app-password
```

### Company Email Server
If using your company's email server:
```bash
SMTP_HOST=your-company-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-company-email@ekkeagle.com
SMTP_PASS=your-company-email-password
```

## Security Best Practices

1. **Never commit .env to version control** - Add `.env` to your `.gitignore` file
2. **Use App Passwords** - Never use your main password for SMTP
3. **Consider a dedicated email account** - Create a separate email account like `noreply@ekkeagle.com`
4. **Use environment-specific configurations** - Different settings for development and production

## Production Considerations

For production deployment, consider using:

1. **Professional Email Services**:
   - SendGrid (recommended for high volume)
   - Mailgun
   - AWS SES (Amazon Simple Email Service)
   - Postmark

2. **Benefits of Professional Services**:
   - Better deliverability rates
   - Analytics and tracking
   - Bounce and complaint handling
   - Higher sending limits
   - Better support

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**:
   - Verify you're using an app password (not your regular password)
   - Ensure 2FA is enabled on your Google account
   - Check that the email address is correct

2. **"Connection refused" error**:
   - Verify SMTP host and port settings
   - Check if firewall is blocking the connection
   - Ensure port 587 is open

3. **"Email not sending" error**:
   - Check console logs for detailed error messages
   - Verify recipient email address is correct
   - Check if email is going to spam folder

### Debug Mode:

For detailed debugging, add this to your server.js temporarily:
```javascript
// After requiring nodemailer
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Only for development
```

## Next Steps

1. Set up your SMTP credentials following the guide above
2. Test with `npm run test-email`
3. Once working, test the actual contact form
4. For production, consider using a professional email service

## Files Modified

- `config/email.js` - Email configuration and templates
- `server.js` - Integrated email sending with form submission
- `.env.example` - Environment variables template
- `test-email.js` - Email testing script
- `package.json` - Added test-email script

## Email Flow

When a user submits the inquiry form:
1. The form data is saved to the MySQL database
2. A notification email is sent to agustiar.fajar@ekkeagle.com with:
   - From: The user's name and email address (from the form field)
   - Subject: "New Inquiry: [subject from form]"
   - HTML-formatted content with all inquiry details
3. A confirmation email is sent to the user with:
   - Thank you message and company contact information
   - Professional HTML formatting

**Important Note**: The notification email will appear to come from the email address that the user entered in the contact form. This allows you to directly reply to the inquiry by simply replying to the email.