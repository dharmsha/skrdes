import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Prime Skill Technical Institute — हुनर सिखाएं, भविष्य बनाएं',
  description: 'Prime Skill Technical Institute Patna — AC, Fridge, Washing Machine, PCB, House Wiring और अन्य होम एप्लायंस रिपेयरिंग की प्रैक्टिकल ट्रेनिंग।',
  keywords: 'technical institute patna, ac repairing training, fridge repairing, skill development, patna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  )
}