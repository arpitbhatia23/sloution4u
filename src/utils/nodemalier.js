import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // true = 465, false = other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendemail = async ({
  name,
  email,
  phone,
  message,
  service,
  company,
}) => {
  await transporter.sendMail({
    from: `"solution4u" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `📩 New ${service || "Customer"} Inquiry`,
    html: `
<div style="margin:0;padding:40px 0;background:#eef4ff;font-family:Arial,Helvetica,sans-serif;">

  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td align="center">

        <table
          role="presentation"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="width:680px;max-width:680px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #dbeafe;box-shadow:0 10px 35px rgba(15,23,42,.08);"
        >

          <tr>
            <td style="background:#1d4ed8;padding:35px 40px;">
              <div style="font-size:28px;font-weight:700;color:#ffffff;">
                Solution4U
              </div>

              <div style="margin-top:6px;color:#dbeafe;font-size:15px;">
                New Customer Enquiry Received
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:30px 40px 10px;">
              <div style="background:#eff6ff;border-left:5px solid #2563eb;padding:18px;border-radius:10px;">
                <div style="font-size:18px;font-weight:700;color:#111827;">
                  New website enquiry
                </div>

                <div style="margin-top:8px;color:#4b5563;line-height:1.7;">
                  A potential customer has contacted Solution4U through the website.
                  Review the enquiry details below and respond promptly.
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 40px;">
              <div style="font-size:18px;font-weight:700;color:#111827;margin-bottom:18px;">
                Customer Information
              </div>

              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:14px;background:#f8fafc;width:180px;font-weight:bold;color:#374151;border:1px solid #e5e7eb;">
                    Full Name
                  </td>
                  <td style="padding:14px;border:1px solid #e5e7eb;color:#111827;">
                    ${name || "-"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px;background:#f8fafc;font-weight:bold;color:#374151;border:1px solid #e5e7eb;">
                    Email Address
                  </td>
                  <td style="padding:14px;border:1px solid #e5e7eb;">
                    <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
                      ${email || "-"}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px;background:#f8fafc;font-weight:bold;color:#374151;border:1px solid #e5e7eb;">
                    Phone Number
                  </td>
                  <td style="padding:14px;border:1px solid #e5e7eb;">
                    <a href="tel:${phone}" style="color:#2563eb;text-decoration:none;">
                      ${phone || "-"}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px;background:#f8fafc;font-weight:bold;color:#374151;border:1px solid #e5e7eb;">
                    Requested Service
                  </td>
                  <td style="padding:14px;border:1px solid #e5e7eb;color:#111827;">
                    ${service || "-"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px;background:#f8fafc;font-weight:bold;color:#374151;border:1px solid #e5e7eb;">
                    Company
                  </td>
                  <td style="padding:14px;border:1px solid #e5e7eb;color:#111827;">
                    ${company || "-"}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 40px 10px;">
              <div style="font-size:18px;font-weight:700;color:#111827;margin-bottom:15px;">
                Customer Message
              </div>

              <div style="background:#f8fbff;border:1px solid #dbeafe;border-left:5px solid #2563eb;border-radius:12px;padding:22px;color:#374151;line-height:1.8;white-space:pre-line;">
                ${message || "No message provided."}
              </div>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:35px;">
              <a
                href="mailto:${email}"
                style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:15px 34px;border-radius:10px;"
              >
                Reply to Customer
              </a>
            </td>
          </tr>

          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e5e7eb;padding:28px;text-align:center;">
              <div style="color:#111827;font-weight:700;font-size:16px;">
                Solution4U
              </div>

              <div style="margin-top:8px;color:#6b7280;font-size:14px;line-height:1.7;">
                This notification was automatically generated from the
                Solution4U website contact form.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</div>
`,
  });
};
