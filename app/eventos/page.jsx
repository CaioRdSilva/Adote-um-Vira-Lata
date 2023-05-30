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
    <Post />
    <h1>bom dia</h1>
        </div>
    )
}