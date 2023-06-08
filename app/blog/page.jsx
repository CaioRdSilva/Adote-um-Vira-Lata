import Post from '../../components/Post'

export const metadata = {
    title: "Blog",
    description: "Adote um Vira Lata"
}

export default function blogPage(){
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 min-lg:max-2xl:grid-cols-2'>
                    <Post /> <Post /> <Post />
                </div>
        </div>
    )
}