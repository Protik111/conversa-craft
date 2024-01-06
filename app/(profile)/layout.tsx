import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from "../../components/SessionProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conversa Craft',
  description: 'Communication platform designed to streamline and enhance your online conversations.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>
        <SessionProvider session={session}>

          <main>
            {children}
          </main>

        </SessionProvider>
      </body>
    </html>
  )
}
