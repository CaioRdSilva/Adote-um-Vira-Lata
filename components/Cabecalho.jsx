import Image from 'next/image';

const Cabecalho = () => (

    <div className='justify-center center'>
        <BannerCabecalho />
        
        <InfoCabecalho />
        
    </div>
)

const BannerCabecalho = () => (

    <div className='relative w-5/6 mx-auto aspect-wall'>
                    <Image 
                        className='object-cover object-center'
                        fill={true}
                        alt='banner'
                        src='/images/banner.webp'
                    />
    </div>
)

const InfoCabecalho = () => (
    <div className='w-full mx-auto md:lg:xl:2xl:w-6/12'>
            <h1 className='text-3xl font-bold text-center text-orange-400 start'>
                All dogs go to heaven
            </h1>
            <TipoDataTempoCabecalho />
            <DescCabecalho />
            <div className='flex justify-between'>
                <AutorCabecalho />
                <InteracoesCabecalho />
            </div>
            
            
    </div>
)

const TipoDataTempoCabecalho = () => (
    <div className='flex my-auto '>
        <h1 className="mr-2 text-xl font-bold text-orange-400">Informativo</h1>
        <div className='flex my-auto'>
            <h2 className='my-auto text-md'>14 de set. de 2020</h2>
            <h1 className='mx-2 my-auto'>•</h1>
            <h2 className='my-auto text-ms'>4 min</h2>
        </div>
    </div>
)

const DescCabecalho = () => (
    <div className='pt-0 pb-2'>
        <p className='text-gray-400'>
            Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Paisis, filhis, espiritis santis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
        </p>
    </div>
)
const AutorCabecalho = () => (
    <div className='flex my-0'>
        <div className='relative w-10 h-10 mr-2 bg-black rounded-full'>
            <Image 
                className='object-cover object-center rounded-full'
                fill={true} 
                alt='autor'
                src='/images/banner.webp'
                />
        </div>
        <h1 className='my-auto text-lg'>Doguinho Feliz</h1>
    </div>
)

const InteracoesCabecalho = () => (
    <div className='flex my-auto'>

        <div className='flex mr-4'>

            <div id ='Heart' className='inline-flex mr-1 text-center'>
                <svg className='fill-gray-600 w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                </svg>
            </div>
            <h2 id='Likes Quantidade'>123</h2>

        </div>

        <div className='flex mr-4'>

            <div id='Share' className='inline-flex mr-1 text-center'> 
                <svg className='fill-gray-600 w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/>
                </svg>
            </div>
            <h3 id='Share Quantidade'>123</h3>

        </div>

        <div className='flex mr-4'>
            
            <div id='Comment' className='inline-flex mr-1 text-center'>
                <svg className='fill-gray-600 w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/>
                </svg>
            </div>
            <h1 id='Comment Quantidade'>123</h1>

        </div>

        <div className='flex mr-4'>
            <div id='View' className='inline-flex mr-1 text-center'>
                <svg className='fill-gray-600 w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                </svg>
            </div>
            <h1 id='View Quantidade'>123</h1>

        </div>
    </div>
)
export default Cabecalho;