import Head from 'next/head'
import Evento from '../../components/Evento'

export default function eventosPage(){
    return (
        <div>
                    <Head>
        <meta charSet='utf-8'/>
        <meta name='robots' content='index, follow'/>
        <meta name='viewport' content='inittial-scale=1.0, width=device-width'/>
        <title>Home</title>
    </Head>
        <div className='grid grid-cols-2 gap-4 mb-5'>
            <Evento />
        </div>
        </div>
    )
}