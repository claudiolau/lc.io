import './globals.css'
import { Inter } from 'next/font/google'
import { clsx } from 'clsx'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Claudio Lau',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    inter.className,
                    `mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto`
                )}
            >
                {children}
            </body>
        </html>
    )
}
