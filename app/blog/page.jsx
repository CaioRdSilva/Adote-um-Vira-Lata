import Head from 'next/head'
import Post from '../../components/Post'

export default function blogPage(){
    return (
        <div>
                    <Head>
        <meta charSet='utf-8'/>
        <meta name='robots' content='index, follow'/>
        <meta name='viewport' content='inittial-scale=1.0, width=device-width'/>
        <title>Home</title>
    </Head>
        <div className='grid grid-cols-1 md:grid-cols-2 min-lg:max-2xl:grid-cols-2'>
                    <Post /> <Post /> <Post />
                </div>
        </div>
    )
}