import Head from 'next/head'
import Menu from '../../components/Menu'
import Image from 'next/image'

export default function blogPage(){
    return (
        <div>
                    <Head>
        <meta charSet='utf-8'/>
        <meta name='robots' content='index, follow'/>
        <meta name='viewport' content='inittial-scale=1.0, width=device-width'/>
        <title>Home</title>
    </Head>
    <Menu />
        <h1>Blog page</h1>
        </div>
    )
}