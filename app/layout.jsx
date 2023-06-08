import '../style/globals.css'
import Menu from '../components/Menu'

export const metadata = {
    title: {
        template: " %s ",
        default: "Adote"
    },
    description: "Adote um Vira Lata"
}

export default function RootLayout({ children }) {
    return(
        <html lang='pt-br'>
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </head>
            <body className='sm:container sm:mx-auto md:container md:mx-auto lg:container lg:mx-auto xl:container xs:mx-auto 2xl:container 2xl:mx-auto'>
            <Menu />
                { children }
            </body>
        </html>
    )
}