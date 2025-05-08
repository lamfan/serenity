import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 邮件发送接口
export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // 验证请求数据
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 创建邮件传输器
        // 使用Gmail的应用密码进行认证
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // 您的Gmail邮箱
                pass: process.env.EMAIL_PASS // 您的Gmail应用密码
            }
        });

        // 邮件选项配置
        const mailOptions = {
            from: `"Serenity Meditation" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO, // 您想要接收消息的邮箱
            replyTo: email, // 设置回复邮件时的收件人为表单提交者
            subject: `[Serenity Contact] ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #3366cc; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Message from Serenity Contact Form</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 5px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="font-size: 12px; color: #666; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            <p>This message was sent from the contact form on the Serenity website.</p>
          </div>
        </div>
      `,
            text: `
        New Message from Serenity Contact Form
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        This message was sent from the contact form on the Serenity website.
      `
        };

        // 发送邮件
        await transporter.sendMail(mailOptions);

        // 可选：发送确认邮件给用户
        const confirmationOptions = {
            from: `"Serenity Meditation" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thank you for contacting Serenity",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #3366cc; border-bottom: 1px solid #eee; padding-bottom: 10px;">Thank You for Contacting Serenity</h2>
          
          <div style="margin: 20px 0;">
            <p>Hello ${name},</p>
            <p>Thank you for reaching out to us. We have received your message and will respond as soon as possible.</p>
            <p>For your records, here is a copy of your message:</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin: 15px 0;">
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div style="margin-top: 5px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <p>Best regards,</p>
            <p>The Serenity Team</p>
          </div>
          
          <div style="font-size: 12px; color: #666; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            <p>Please do not reply to this email as it was sent from an unmonitored account.</p>
          </div>
        </div>
      `,
            text: `
        Thank You for Contacting Serenity
        
        Hello ${name},
        
        Thank you for reaching out to us. We have received your message and will respond as soon as possible.
        
        For your records, here is a copy of your message:
        
        Subject: ${subject}
        Message:
        ${message}
        
        Best regards,
        The Serenity Team
        
        Please do not reply to this email as it was sent from an unmonitored account.
      `
        };

        // 发送确认邮件
        await transporter.sendMail(confirmationOptions);

        // 返回成功响应
        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
