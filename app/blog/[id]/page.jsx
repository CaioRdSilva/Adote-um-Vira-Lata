import Cabecalho from '../../../components/blog/Cabecalho'
import Conteudo from '../../../components/blog/Conteudo'
import Comentario from '../../../components/blog/Comentario'

export const metadata = {
    title: "Blog",
    description: "Adote um Vira Lata"
}


export default function postBlogPage({ params }){
    console.log(params);
    return(
        <div>
            <div>
                
                <Cabecalho />

            </div>
            <div>

                <Conteudo />

            </div>
            <div>
                <h1 className='w-4/6 mx-auto text-3xl h-1/2'>Comentários (23)</h1>
                <div className='w-full mx-auto md:lg:xl:2xl:w-7/12'>
                    <Comentario />
                    <Comentario />
                    <Comentario />

                </div>
            </div>
            <h1 className='text-9xl'>{params.id}</h1>
        </div>
    )
}