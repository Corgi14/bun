import type { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'

type LayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

const RootLayout = ({ children }: Readonly<LayoutProps>) => {
    return (
        <html lang="en">
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
