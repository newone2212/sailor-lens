const express = require('express');
const client = require('@sendgrid/mail');

// Set SendGrid API key
client.setApiKey(process.env.SENDGRID_API_KEY);

// Generate a random OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
// Store generated OTPs (you should use a database in production)
const otpStorage = new Map();
module.exports = {
    // Define POST endpoint for sending emails
    sendOtp: (req, res) => {
        const { from, to } = req.body; // Assuming 'from', 'to', and 'otp' are provided in the request body
        const otp = generateOTP();

        // Store the OTP for verification
        otpStorage.set(to, otp);
        const message = {
            from: from, // Sender email and name
            to: to, // Recipient email and name
            subject: 'Your One-Time Password (OTP)', // Email subject
            html: `<p>Your One-Time Password (OTP) is: <strong>${otp}</strong></p>` // Email body with OTP
        };

        client.send(message)
            .then(() => {
                console.log('Mail sent successfully');
                res.status(200).send('Mail sent successfully');
            })
            .catch(error => {
                console.error(error);
                res.status(500).send('Error sending email');
            });
    },
    //verify otp
    verifyOtp: async (req, res) => {
        const { phoneNumber, otp } = req.body;
        const storedOTP = otpStorage.get(phoneNumber);

        if (storedOTP === otp) {
            otpStorage.delete(phoneNumber);
            res.json({ message: 'OTP verified successfully' });
        } else {
            res.status(400).json({ error: 'Invalid OTP' });
        }
    }
}
