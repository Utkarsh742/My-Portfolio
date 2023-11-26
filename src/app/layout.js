import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import Favicon from 'public/assets/favicon.ico'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Portfolio',
  ogTitle: 'Personal Portfolio of Utkarsh Dwivedi',
  description: 'Personal Portfolio of Utkarsh Dwivedi handcrafted for showcasing my work and skills.',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name='og:title' content={metadata.ogTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
