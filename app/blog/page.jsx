import { getAllPosts } from '../../api'
import Post from '../../components/Post'
import AddBlog from '../../components/addBlog'
export const metadata = {
    title: "Blog",
    description: "Adote um Vira Lata"
}

export default async function blogPage(){
    const posts = await getAllPosts();
    console.log(posts)

    return (
        <div>
        <AddBlog />
        <div className='grid grid-cols-1 md:grid-cols-2 min-lg:max-2xl:grid-cols-2'>
                    <Post  posts={posts}/>
                </div>
        </div>
    )
}