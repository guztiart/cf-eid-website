const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com', // Default to Gmail, can be changed
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'guztiart06@gmail.com', // Your email address
    pass: process.env.SMTP_PASS || 'ilqx ogdd taaf rwab' // Your email password or app password
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

// Function to send email notification
const sendInquiryEmail = async (inquiryData) => {
  try {
    const { name, email, subject, message } = inquiryData;
    const cleanName = String(name).replace(/[^a-zA-Z0-9 .,'"-]/g, '').trim();
    const ccEmail = 'shinta.maharani@ekkeagle.com, sarah.puspawati@ekkeagle.com, yoan.puspita@ekkeagle.com, demis.cakta@ekkeagle.com';

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'eid.sales@ekkeagle.com',
      cc: ccEmail,
      replyTo: email,
      subject: `📩 New Inquiry: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Inquiry</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; color: #333;">
          <div style="max-width: 650px; margin: 30px auto; background: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden;">
            <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 600;">📩 New Website Inquiry</h1>
            </div>
            
            <div style="padding: 24px;">
              <div style="margin-bottom: 20px; padding: 16px; background: #f0f7ff; border-left: 4px solid #3b82f6; border-radius: 6px;">
                <p style="margin: 6px 0; font-size: 15px;"><strong>👤 Name:</strong> ${cleanName}</p>
                <p style="margin: 6px 0; font-size: 15px;"><strong>✉️ Email:</strong> <a href="mailto:${email}" style="color: #1e3a8a; text-decoration: none;">${email}</a></p>
                <p style="margin: 6px 0; font-size: 15px;"><strong>📌 Subject:</strong> ${subject}</p>
              </div>

              <h3 style="color: #1e3a8a; margin-top: 24px; margin-bottom: 12px; font-size: 17px;">💬 Message:</h3>
              <div style="padding: 16px; background: #fafafa; border-radius: 8px; border: 1px solid #eaeaea; white-space: pre-wrap; font-family: inherit; font-size: 15px;">
                ${message.replace(/\n/g, '<br>')}
              </div>

              <p style="margin-top: 24px; font-size: 13px; color: #666; line-height: 1.5;">
                <em>This inquiry was submitted via the PT. Eagle Industry Indonesia website contact form.<br>
                Simply reply to this email to respond directly to the sender (${email}).</em>
              </p>
            </div>

            <div style="background: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #eee; font-size: 12px; color: #888;">
              © ${new Date().getFullYear()} PT. Eagle Industry Indonesia. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

// Function to send confirmation email to the user
// Function to send confirmation email to the user
const sendConfirmationEmail = async (userEmail, userName) => {
  try {
    const cleanName = String(userName).replace(/[^a-zA-Z0-9 .,'"-]/g, '').trim();

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: userEmail,
      subject: 'Thank you for your inquiry – Eagle Industry Indonesia',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; color: #333;">
          <div style="max-width: 650px; margin: 30px auto; background: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden;">
            <div style="background: linear-gradient(135deg, #0d9488, #14b8a6); padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 600;">✅ Thank You!</h1>
            </div>
            
            <div style="padding: 28px;">
              <p style="font-size: 17px; line-height: 1.6;">
                Dear <strong>${cleanName}</strong>,
              </p>
              <p style="font-size: 16px; line-height: 1.6;">
                Thank you for reaching out to <strong>Eagle Industry Indonesia</strong>. We’ve received your message and will review it carefully.
              </p>
              <p style="font-size: 16px; line-height: 1.6;">
                Our team will get back to you within 1–2 business days.
              </p>

              <div style="margin: 28px 0; padding: 20px; background: #f0fdfa; border-radius: 10px; border: 1px solid #a7f3d0;">
                <h3 style="color: #0d9488; margin-top: 0; font-size: 17px;">📞 Need to reach us sooner?</h3>
                <p style="margin: 8px 0; font-size: 15px;"><strong>Email:</strong> <a href="mailto:eid.sales@ekkeagle.com" style="color: #0d9488; text-decoration: none;">eid.sales@ekkeagle.com</a></p>
                <p style="margin: 8px 0; font-size: 15px;"><strong>Phone:</strong> (021) 8970178</p>
                <p style="margin: 8px 0; font-size: 15px;"><strong>Address:</strong> EJIP Industrial Park, Plot 8G, Sukaresmi, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17550</p>
              </div>

              <p style="font-size: 15px; color: #555; line-height: 1.5;">
                We appreciate your interest in Eagle Industry Indonesia.
              </p>

              <p style="font-size: 16px; margin-top: 16px;">
                Best regards,<br>
                <strong>PT. Eagle Industry Indonesia Team</strong>
              </p>
            </div>

            <div style="background: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #eee; font-size: 12px; color: #888;">
              © ${new Date().getFullYear()} PT. Eagle Industry Indonesia. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  transporter,
  sendInquiryEmail,
  sendConfirmationEmail
};