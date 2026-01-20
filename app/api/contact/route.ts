import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Portfolio Contact Form Submission</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 32px 24px; text-align: center;">
                <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">Portfolio Contact Form Submission</h1>
              </div>

              <!-- Content -->
              <div style="padding: 32px 24px;">
                
                <!-- Sender Info -->
                <div style="margin-bottom: 24px;">
                  <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; margin-bottom: 4px;">From</span>
                  <div style="font-size: 16px; color: #1e293b; font-weight: 500;">
                    ${name} <span style="color: #cbd5e1; margin: 0 8px;">|</span> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </div>
                </div>

                <!-- Subject -->
                <div style="margin-bottom: 24px;">
                  <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; margin-bottom: 4px;">Subject</span>
                  <div style="font-size: 16px; color: #1e293b; font-weight: 500;">${subject}</div>
                </div>

                <!-- Message -->
                <div>
                  <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; margin-bottom: 8px;">Message</span>
                  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
                </div>

              </div>

              <!-- Footer -->
              <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                  This email was sent efficiently from your portfolio contact form.
                </p>
              </div>

            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
