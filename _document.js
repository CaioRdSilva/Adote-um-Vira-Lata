import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return(
        <Html>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <body  className='container mx-auto sm:container sm:mx-auto md:container md:mx-auto lg:container lg:mx-auto xl:container xs:mx-auto 2xl:container 2xl:mx-auto'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}