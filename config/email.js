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
    const cleanName = String(name).replace(/[^a-zA-Z0-9 .,'"-]/g, '');

    const mailOptions = {
      from: process.env.SMTP_USER, // Simple from address using authenticated user
      to: 'guztiart06@gmail.com',
      replyTo: email, // Simple reply-to with user's email
      subject: `New Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Inquiry Received</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <p><strong>From:</strong> ${cleanName} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            This email was sent from the EID Website contact form.<br>
            Reply to this email to respond to the inquiry (will go to: ${email}).
          </p>
        </div>
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
const sendConfirmationEmail = async (userEmail, userName) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: userEmail,
      subject: 'Thank you for your inquiry - Eagle Industry Indonesia',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Inquiry</h2>
          <p>Dear ${userName},</p>
          <p>Thank you for contacting Eagle Industry Indonesia. We have received your inquiry and will get back to you as soon as possible.</p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Our Contact Information:</strong></p>
            <p style="margin: 5px 0;">Email: shinta.maharani@ekkeagle.com</p>
            <p style="margin: 5px 0;">Phone: (021) 8970178</p>
            <p style="margin: 5px 0;">Address: EJIP Industrial Park, Plot 8G, Sukaresmi, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17550</p>
          </div>
          <p>Best regards,<br>The Eagle Industry Indonesia Team</p>
        </div>
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