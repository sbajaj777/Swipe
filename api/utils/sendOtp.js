import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.OTP_EMAIL,
    pass: process.env.OTP_PASS,
  },
});

export const sendOtp = async (email, otp) => {
  const mailOptions = {
    from: process.env.OTP_EMAIL,
    to: email,
    subject: 'OTP for Signup',
    html: `<p>Your OTP is <b>${otp}</b>. It is valid for 5 minutes.</p>`,
  };

  return transporter.sendMail(mailOptions);
};
