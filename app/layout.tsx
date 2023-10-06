'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const linksC = [{
  label: 'Getting Started',
  route: '#'
}, {
  label: 'Casos de Uso',
  route: '#'
}, {
  label: 'Docs',
  route: '#'
}, {
  label: 'Precios',
  route: '#'
}, {
  label: 'Blog',
  route: '#'
}]

const linksR = [{
  label: 'Login',
  route: '/login'
}, {
  label: 'Registrarse',
  route: '/signUp'
}]

export const metadata: Metadata = {
  title: 'ADA AI',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul className='navBarList'>
              <div className='navL'>
                <a href="/">
                  <Image src={"/img/ada_logoMini.png"} alt='ADA' width={50} height={50} className='logo' />
                  ADA
                </a>
              </div>

              <div className='navC'>
                {linksC.map(({ label, route }) => (
                  <li key={route}>
                    <Link href={route}>{label}</Link>
                  </li>
                ))}
              </div>

              <div className='navR'>
                {linksR.map(({ label, route }) => (
                  <li key={route}>
                    <Link href={route}>{label}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </header>
        <ProgressBar
          height="4px"
          color="#777ff3"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <div className='background'>
          <div className='img'>
            <img src="/img/black-background.jpg" alt="" />
          </div>
          <div className='img_overlay'></div>
        </div>
        {/* <main className='container'>
        </main> */}
        {children}
      </body>
    </html>
  )
}
