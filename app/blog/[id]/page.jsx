import Head from 'next/head';
import Image from 'next/image';
import Menu from '../../../components/Menu';
import Cabecalho from '../../../components/Cabecalho';


export default function BlogPost({ params }) {
    console.log(params);
    return (
        <div>
            <Head>
                <meta charSet='utf-8'/>
                <meta name='robots' content='index, follow'/>
                <meta name='viewport' content='inittial-scale=1.0, width=device-width'/>
                <title>Post {params.id}</title>
            </Head>
            <Menu />
            <div className='justify-center'>
                <div className='flex justify-center'> 
                    <Image 
                        className='object-cover w-9/12 sm:aspect-wall' 
                        width={2048} height={2048} 
                        contain src='/images/banner.webp'/>
                </div>
                <div className='flex justify-center '>
                    <Cabecalho />
                </div>
            </div>
            <h1>Blog post {params.id}</h1>
        
        
        </div>
        );
}