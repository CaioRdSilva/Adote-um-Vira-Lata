import '@/styles/globals.css'
import Menu from '@/components/Menu'
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import React, { Suspense } from 'react'
import { NextAuthProvider } from '@/app/providers'

export const metadata: Metadata = {
    title: {
        template: '%s | Adote',
        default: "Adote"
    },
    description: "Adote um Vira Lata",
    
}

export default function RootLayout({ children } : { children: React.ReactNode}) {
    return(
        <html lang='pt-br'>
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </head>
            <body className='sm:container sm:mx-auto md:container md:mx-auto lg:container lg:mx-auto xl:container xs:mx-auto 2xl:container 2xl:mx-auto'>
            <NextAuthProvider >
            <Menu />
            <Toaster />
            <Suspense fallback="Loading..">
                 
            </Suspense>
               { children }
               </NextAuthProvider>
            </body>
        </html>
    )
}