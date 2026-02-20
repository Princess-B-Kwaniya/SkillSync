import './globals.css'
import { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SavedJobsProvider from './components/SavedJobsProvider'

export const metadata = {
  title: 'SKILLSYNC - Employment Intelligence',
  description: 'SKILLSYNC Employment Intelligence frontend'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <SavedJobsProvider>
            <main className="flex-1 container py-12">{children}</main>
            <Footer />
          </SavedJobsProvider>
        </div>
      </body>
    </html>
  )
}
