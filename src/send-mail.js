"use strict";
require("dotenv").config();

const nodemailer = require("nodemailer");
const path = require("path");

const sendEmail = async (mailObj) => {
    const { from, to, subject, text } = mailObj;

    try {
        // Create a transporter
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_SERVER,
            port: 587,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from,
            to,
            subject,
            text,
            html: {
                path: path.resolve(__dirname, "../template/main.html"),
            },
        });

        console.log(`Message sent: ${info.messageId}`);
    } catch (error) {
        console.error(error);
        throw new Error(
            `Something went wrong in the sendmail method. Error: ${error.message}`
        );
    }
};

module.exports = sendEmail;
