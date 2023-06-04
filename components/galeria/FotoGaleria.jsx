import Image from "next/image";

const FotoGaleria = () => (
    <div className=''>
        <Image 
        className='w-full rounded'
        width={300}
        height={300}
        src='/test/teste-1.png'
        />
    </div>
)
 
export default FotoGaleria;