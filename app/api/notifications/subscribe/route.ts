import { NextResponse } from 'next/server'

// Demo-only in-memory subscriptions store.
// Note: Serverless platforms (like Vercel) don't guarantee writable persistent
// filesystem or long-lived process memory across invocations. Replace this with
// a proper DB (Postgres, Supabase, DynamoDB, etc.) for production.
const SUBSCRIPTIONS: Array<{ email: string; userId: string | null; prefs: any; createdAt: string }> = []

export async function POST(req: Request){
  try {
    const body = await req.json()
    const email = body.email
    const userId = body.userId || null
    const prefs = body.prefs || {}

    if (!email) return NextResponse.json({ error: 'email required' }, { status: 400 })

    const exists = SUBSCRIPTIONS.find(s => s.email === email)
    if (!exists) {
      SUBSCRIPTIONS.push({ email, userId, prefs, createdAt: new Date().toISOString() })
      // For demo/debug: log current subscriptions (do not log PII in production)
      console.log('[subscribe] subscriptions:', SUBSCRIPTIONS.length)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
