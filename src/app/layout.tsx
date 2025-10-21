import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Younnes Haddouch - Computer Science Student & Aspiring Consultant',
  description: 'Computer Science Student & Aspiring Consultant passionate about tech for social mobility. BSc Computer Science at Newcastle University.',
  keywords: ['Younnes Haddouch', 'Computer Science', 'Technology', 'Social Mobility', 'Consultant', 'Newcastle University'],
  authors: [{ name: 'Younnes Haddouch' }],
  creator: 'Younnes Haddouch',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://younneshaddouch.vercel.app',
    title: 'Younnes Haddouch - Computer Science Student & Aspiring Consultant',
    description: 'Computer Science Student & Aspiring Consultant passionate about tech for social mobility.',
    siteName: 'Younnes Haddouch Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Younnes Haddouch - Computer Science Student & Aspiring Consultant',
    description: 'Computer Science Student & Aspiring Consultant passionate about tech for social mobility.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
