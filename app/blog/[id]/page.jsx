import Head from 'next/head'
import Image from 'next/image'

import Cabecalho from '../../../components/Cabecalho'

export default function postBlogPage({ params }){
    console.log(params);
    return(
        <div>
            <Head>
                <meta charSet='utf-8'/>
                <meta name='robots' content='index, follow'/>
                <meta name='viewport' content='inittial-scale=1.0, width=device-width'/>
                <title>{params.id}</title>
            </Head>
            <div>
                
                <Cabecalho />
            </div>
            <h1 className='text-9xl'>{params.id}</h1>
        </div>
    )
}