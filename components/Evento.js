import Link from 'next/link'
import Image from 'next/image'


const Evento = () => (

    <div className='block mx-5 my-4 bg-gray-100 min-h-[500px] w-12/12'>
        <div className='relative w-full h-3/6'>
            <Image 
                className='object-cover object-center'
                fill
                contain src='/test/t_evento1.webp'/>
        </div>
        <div className='block mx-10'>

            <div className='inline-flex w-full'>
                <h1 className='text-2xl font-bold'>All dogs go to heaven</h1>
                <h3>Adoção</h3>
            </div>
            
            <div className='flex'>
                <div id='info' className='min-w-[70%] max-w-[70%]'>
                    <div>
                        <Image />
                        <h3>Doguinho Feliz</h3>
                    </div>
                    <div>
                        <icon />
                        <h3>Rua Estevão Ferreira</h3>
                    </div>
                    <div>
                        <icon />
                        14 de set. de 2020
                    </div>
                    <div>
                        <div>L 1234</div>
                        <div>C 1344</div>
                        <div>K 2134</div>
                    </div>
                </div>
                <div id='descricao' className=' max-w-[30%]'>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.Praesent vel viverra nisi. </p>
                </div>
            </div>
        </div>


    </div>
)

export default Evento