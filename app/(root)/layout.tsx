import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getServerSession } from 'next-auth'

import SessionProvider from "../../components/SessionProvider"
import NavMenu from '../../components/NavMenu'
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'

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
      <body className={inter.className}>
        <SessionProvider session={session}>
          {/* <NavMenu /> */}
          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
            <RightSidebar />
          </main>

          <Bottombar />
        </SessionProvider>
      </body>
    </html>
  )
}
