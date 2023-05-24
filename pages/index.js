import Head from 'next/head'
import Menu from '../components/Menu'
import Image from 'next/image'

export default function home(){
    return(
        <div>
            <Head>
                <meta charSet='utf-8'/>
                <meta name='robots' content='index, follow'/>
                <meta name='viewport' content='inittial-scale=1.0, width=device-width'/>
                <title>Home</title>
            </Head>
            <Menu/>
            <Image className='w-50 sm:w-100 md:w-300 lg:w-400 xl:w-800 2xl:w-1000 object-fit' width={2048} height={2048} contain src='/images/banner.webp'/>
            <div className='pt-12 text-center'>
                <h1 className='text-3xl font-bold font-poppins'>QUEM NÓS SOMOS</h1>
                <p className='pt-8 font-semibold text-left font-poppins'>Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis!Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.</p>
                <p className='pt-8 font-semibold text-left font-poppins'>Casamentiss faiz malandris se pirulitá.Si num tem leite então bota uma pinga aí cumpadi!Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Paisis, filhis, espiritis santis.</p>
            </div>

            <div className='pt-12 text-center'>
                <h1 className='text-3xl font-bold font-poppins'>CONHEÇA A NOSSA HISTÓRIA</h1>
            </div>
        </div>
    )
}