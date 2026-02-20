# my-project

This is a Next.js 14 (App Router) starter scaffold for SKILLSYNC, an Employment Intelligence frontend.

Features:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion micro-interactions
- Reusable `Button`, `Card`, `Navbar`, and layout
- Responsive and dark/light friendly tokens

Quick start

1. Install dependencies

```bash
cd my-project
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build

```bash
npm run build
npm run start
```

Deployment to Vercel
-------------------

This project is a Next.js app and can be deployed to Vercel with minimal setup.

1. Push your repository to GitHub (or another Git provider).
2. Go to https://vercel.com/new and import the repository (framework is detected as Next.js).
3. Add environment variables (if you want real email sending):
	- `SMTP_HOST`
	- `SMTP_PORT`
	- `SMTP_USER`
	- `SMTP_PASS`
	- Optional: `SMTP_FROM`

Notes about server APIs and Vercel compatibility
- The demo `/api/notifications/subscribe` route uses an in-memory store for subscriptions. On Vercel this is transient and not persistent across function instances — replace with a proper DB (Supabase, Postgres, DynamoDB) for production.
- The `/api/notifications/send-test` route uses `nodemailer` and will send real emails when SMTP env vars are configured. Vercel supports outbound SMTP calls, but using a managed provider (SendGrid, SES, Mailgun) is recommended for reliability.

If you want, I can push this repo to GitHub for you and configure a Vercel project (you'll need to provide a GitHub repo location or allow me to create one in your account).

Notes
- Tailwind and PostCSS are configured in `tailwind.config.ts` and `postcss.config.cjs`.
- Global styles in `app/globals.css` contain variables and small utility classes (glass navbar, buttons, cards).
