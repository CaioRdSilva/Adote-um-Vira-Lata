import Head from 'next/head'
import Menu from '../components/Menu'
import Evento from '../components/Evento'
import Image from 'next/image'

export default function evento(){
    return(
        <div>
            <Head>
                <meta charSet='utf-8'/>
                <meta name='robots' content='index, follow'/>
                <meta name='viewport' content='inittial-scale=1.0, width=device-width'/>
                <title>Eventos</title>
            </Head>
            <Menu/>
            
            <div className='flex justify-between p-1 pt-2 center'>
                <div>
                    <h1 className='font-bold font-poppins'>Próximos eventos:</h1>
                </div>
                
                <div className='flex space-x-8'>
                    <p className="">Ordenar por</p>
                    <p>Filtrar</p>
                    <form className='p-1 space-x-0 align-top bg-gray-100 rounded-xl'>
                        <input 
                            className='bg-gray-100'
                            type='text' 
                            name='pesquisar-ev'
                            id='pesquisar-ev'
                            placeholder='Pesquisar Evento'/>
                        <button>p</button>
                    </form>
                </div>
            </div>



            
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'> 
                <Evento />
                <Evento />
                <Evento />
                <Evento />
            </div>

        </div>
    )
}
/**flex justify-center mx-5 my-4 center*/