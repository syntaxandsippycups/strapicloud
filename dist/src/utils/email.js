"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNewPostEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendNewPostEmail = async (to, title) => {
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    await transporter.sendMail({
        from: `"Syntax and SuppyCups" <${process.env.EMAIL_USER}>`,
        to,
        subject: 'New Blog Post Published!',
        text: `Check out our latest post: "${title}"`,
        html: `<p>Check out our latest post: <strong>${title}</strong></p>`,
    });
};
exports.sendNewPostEmail = sendNewPostEmail;
