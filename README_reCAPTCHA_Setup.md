# Google reCAPTCHA v3 Implementation Guide

## Overview
This document explains the Google reCAPTCHA v3 implementation in the Contact form and provides instructions for backend verification.

## Frontend Implementation
The reCAPTCHA has been integrated into the Contact.js component with support for both v2 (visible) and v3 (invisible) versions with the following features:
- Automatic script loading
- Token generation on form submission
- Token inclusion in form data
- Error handling for reCAPTCHA failures
- Configurable version (v2 or v3)
- Visual indicator for reCAPTCHA v3
- Visible checkbox for reCAPTCHA v2

## Environment Variables

### For Frontend (.env file)
Add the following to your frontend environment variables:
```
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
REACT_APP_RECAPTCHA_VERSION=v3  # Can be 'v2' (visible) or 'v3' (invisible)
```

### For Backend (.env file)
Add the following to your backend environment variables:
```
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
```

## Getting reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Sign in with your Google account
3. Register a new site:
   - Label: Your site name (e.g., "EID Website")
   - reCAPTCHA type: Choose between:
     - **reCAPTCHA v3**: Invisible, analyzes user behavior
     - **reCAPTCHA v2**: "I'm not a robot" checkbox (visible)
   - Domains: Add your domain (e.g., localhost, yourdomain.com)
   - Accept the terms of service
4. You'll receive a Site Key and Secret Key
5. Set `REACT_APP_RECAPTCHA_VERSION` in your .env file to match the type you selected ('v2' or 'v3')

## Backend Verification

The frontend sends the reCAPTCHA token along with the form data. Your backend API endpoint (`/api/inquiry`) needs to verify this token with Google.

### Node.js Example Verification Code

```javascript
const axios = require('axios');

// Verify reCAPTCHA token
const verifyRecaptcha = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  
  try {
    const response = await axios.post(verificationURL);
    return response.data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
};

// In your inquiry route handler
app.post('/api/inquiry', async (req, res) => {
  try {
    const { recaptchaToken, ...formData } = req.body;
    
    // Verify reCAPTCHA token
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    
    if (!isRecaptchaValid) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA verification failed. Please try again.'
      });
    }
    
    // Continue with form processing...
    
  } catch (error) {
    // Handle errors
  }
});
```

## Testing

### Test Keys (for development only)
- Site Key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEbQjYfy6C7bQx`
- Secret Key: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`

**Important:** These test keys will always return a successful verification. Replace them with your actual keys before deploying to production.

## Security Considerations

1. Always verify reCAPTCHA tokens on the server side
2. Never expose your secret key in frontend code
3. Use environment variables to store your keys
4. Implement additional validation and rate limiting on your backend

## Troubleshooting

### Common Issues

1. **"reCAPTCHA not loaded" error**
   - Check if the script is loading properly
   - Verify your site key is correct
   - Ensure your domain is registered in reCAPTCHA console

2. **Verification fails on backend**
   - Check if your secret key is correct
   - Ensure you're making a POST request to the verification URL
   - Verify the token is being sent correctly from frontend

3. **Token expires**
   - reCAPTCHA v3 tokens are valid for 2 minutes
   - Process the form submission promptly after token generation

## Current Implementation Status

- ✅ Frontend integration complete
- ⏳ Backend verification needs to be implemented
- ⏳ Environment variables need to be configured with production keys

## Next Steps

1. Replace test keys with production keys
2. Implement backend verification in `/api/inquiry` endpoint
3. Test the complete flow end-to-end
4. Monitor reCAPTCHA scores and adjust thresholds if needed