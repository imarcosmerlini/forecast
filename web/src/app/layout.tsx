import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Forecast',
  description: 'Consulte o tempo em sua região!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex items-center justify-center bg-sky-50 font-sans`}
      >
        <main className="">
          <div className="flex justify-center gap-5 border-b-2 border-gray-300 pt-10">
            <a
              href="/"
              className="block text-2xl text-gray-500 underline hover:text-gray-300"
            >
              Home
            </a>
            <p className="text-2xl">/</p>
            <a
              href="/weather/list"
              className="block text-2xl text-gray-500 underline hover:text-gray-300"
            >
              Histórico
            </a>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
