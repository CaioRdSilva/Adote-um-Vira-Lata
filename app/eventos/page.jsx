import Evento from '../../components/Evento'

export const metadata = {
    title: "Eventos",
    description: "Adote um Vira Lata"
}


export default function eventosPage(){
    return (
        <div>
        <div className='grid grid-cols-2 gap-4 mb-5'>
            <Evento />
        </div>
        </div>
    )
}