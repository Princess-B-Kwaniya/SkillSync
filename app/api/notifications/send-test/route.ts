import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request){
  const body = await req.json()
  const to = body.email
  const subject = body.subject || 'SKILLSYNC Job Update — Test'
  const text = body.text || 'This is a test email from SKILLSYNC.'

  if (!to) return NextResponse.json({ error: 'email required in body' }, { status: 400 })

  // Read SMTP config from env
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    // Simulate send in demo mode
    console.log('[notifications] SMTP not configured — simulating send to', to)
    console.log('subject:', subject)
    console.log('text:', text)
    return NextResponse.json({ ok: true, simulated: true })
  }

  try {
    const transporter = nodemailer.createTransport({ host, port, auth: { user, pass }, secure: false })
    await transporter.sendMail({ from: process.env.SMTP_FROM || user, to, subject, text })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('send-test error', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
