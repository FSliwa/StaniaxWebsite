import { Resend } from 'resend'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { projectType, firstName, lastName, email, phone, message } = req.body

    if (!firstName || !email || !message || !projectType) {
      return res.status(400).json({ error: 'Brakuje wymaganych pól' })
    }

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 32px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 2px;">STANIAX</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Nowe zapytanie z formularza kontaktowego</p>
        </div>
        
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #334155; border-bottom: 1px solid #e2e8f0; width: 140px;">Typ projektu</td>
              <td style="padding: 12px 16px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #334155; border-bottom: 1px solid #e2e8f0;">Imię</td>
              <td style="padding: 12px 16px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #334155; border-bottom: 1px solid #e2e8f0;">Nazwisko</td>
              <td style="padding: 12px 16px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">${lastName || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #334155; border-bottom: 1px solid #e2e8f0;">Email</td>
              <td style="padding: 12px 16px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #334155; border-bottom: 1px solid #e2e8f0;">Telefon</td>
              <td style="padding: 12px 16px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">${phone || '—'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; padding: 20px; background: white; border-radius: 12px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px; font-weight: 600; color: #334155; font-size: 14px;">Wiadomość:</p>
            <p style="margin: 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>

        <div style="padding: 16px 32px; background: #f1f5f9; text-align: center; font-size: 12px; color: #94a3b8;">
          Wysłano ze strony staniax.pl • ${new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })}
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: 'STANIAX Formularz <formularz@staniax.pl>',
      to: ['filipsliwa.business.contact@gmail.com'],
      subject: `🔧 Nowe zapytanie: ${projectType} — ${firstName} ${lastName || ''}`.trim(),
      html: htmlContent,
      replyTo: email
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Nie udało się wysłać wiadomości' })
    }

    return res.status(200).json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Server error:', err)
    return res.status(500).json({ error: 'Błąd serwera' })
  }
}
