import Link from 'next/link'
import Image from 'next/image'


const Evento = () => (

    <div className='block mx-5 my-4 bg-[#f9f9f9] min-h-[500px] w-12/12 rounded-xl drop-shadow-md'>
        <ImagemEvento />
        <InfoEvento />
    </div>
)



const InfoEvento = () => (

    <div className='block mx-10 '>
        <TitulotipoEvento />
        <div className='flex'>
            <div id='info' className='block w-full'>
                <div className='block min-h-[90%] pt-[2%] space-y-2'>

                    <CriadorEvento />
                    <LocalEvento />
                    <DataEvento />

                </div>
                
                <InteracoesEvento />

            </div>

            <DescEvento />    

        </div>
    </div>
)

const ImagemEvento = () => (
    <div className='relative w-full h-[60%]'>
            <Image 
                className='object-cover object-center rounded-t-xl'
                fill
                contain src='/test/t_evento1.webp'/>
    </div>
)

const InteracoesEvento = () => (
    <div className='inline-flex space-x-[6px]'>

        <div id='Check' className='inline-flex text-center'>
            <svg className='fill-[#569562] w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
            </svg>
            
            <h3 className='mx-2 text-xl'>123</h3>
        </div>

        <div className='inline-flex text-center'>
        <svg className='fill-[#E84A43] w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
        </svg>
            <h3 className='mx-2 text-xl'>123</h3>
        </div>
        <div className='inline-flex text-center'> 
            <svg className='fill-[#1e1e1e] w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/>
            </svg>
            <h3 className='mx-2 text-xl'>123</h3>
        </div>

    </div>

)

const TitulotipoEvento = () => (
    <div className='inline-flex'>
        <div className='inline-flex w-full align-middle'>
            <h1 id='titulo' className='text-2xl font-bold'>All dogs go to heaven</h1>
            <h1 id='evento' className='ml-[10px] align-bottom text-xl text-[#FF8A00] mx-0 my-auto'>Adoção</h1>
        </div>
    </div>
    
)

const DescEvento = () => (
    <div id='descricao' className='max-w-[40%] text-lg'>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.Praesent vel viverra nisi. </p>
    </div>
)

const CriadorEvento = () => (
    <div className='flex text-xl'>
        <div className='mx-1 relative w-[30px] h-[30px] bg-black rounded-full'>
        <Image 
            className='full-rounded'
            fill
            src='/images/LOGO.webp'/>
        </div>
        
        <h3 className='mx-0 my-auto text-xl'>Doguinho Feliz</h3>
    </div>
)
const LocalEvento = () => (
    <div className='flex text-xl'>
        <svg className='w-[20px] mx-[6px] fill-[#569562]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
        </svg>
        <h3>Rua Estevão Ferreira</h3>
    </div>
)
const DataEvento = () => (
    <div className='flex text-xl'>
        <svg className='w-[20px] mx-[6px] fill-[#569562]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
        </svg>
        <h3>14 de set. de 2020</h3>
    </div>
)


export default Evento