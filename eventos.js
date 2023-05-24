import Head from 'next/head'
import Menu from '../components/Menu'
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
            <div className='flex pt-2 justify-between p-1'>
                <div>
                    <h1 className='font-poppins font-bold'>Próximos eventos:</h1>
                </div>
                
                <div className='flex space-x-8'>
                    <p className="">Ordenar por</p>
                    <p>Filtrar</p>
                    <form className='space-x-0 p-1 rounded-xl bg-gray-100 align-top'>
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
            
        </div>
    )
}