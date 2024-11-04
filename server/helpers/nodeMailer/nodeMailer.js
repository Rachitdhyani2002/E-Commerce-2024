//Import statements
import nodemailer from 'nodemailer'


//Transporter with SMTP setting
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user:process.env.ADMIN_EMAIL,
        pass:process.env.ADMIN_EMAIL_PASSWORD
    }
})

//Function to send email to admin
export const sendToAdmin = async(email, query) => {
    const mailOptions = {
        from:email,
        to: process.env.ADMIN_EMAIL,
        subject: "New Contact Form Submission",
        text: `You have received a new text message from ${email}:\n\n${query}`
    };
    
    return transporter.sendMail(mailOptions)
        .then(info => {
            console.log('Email sent: ' + info.response);
        })
        .catch(error => {
            console.error('Error sending email:', error);
            throw error;  // Rethrow to handle in the controller
        });
};


