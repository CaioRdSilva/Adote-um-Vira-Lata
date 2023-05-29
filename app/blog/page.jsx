import Head from 'next/head'
import Menu from '../../components/Menu'
import Post from '../../components/Post'
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
        <div className='grid grid-cols-1 md:grid-cols-2 min-lg:max-2xl:grid-cols-2'>
                    <Post /> <Post /> <Post />
                </div>
        </div>
    )
}