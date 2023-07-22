import { getAllPosts } from '../../api'
import Post from '../../components/Post'
import AddBlog from '../../components/addBlog'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Blog",
    description: "Adote um Vira Lata"
}

export default async function blogPage(){
    const posts = await getAllPosts();
    console.log(posts)

    return (
        <div className="">
        <AddBlog />
        <div className=''>
        <Post posts={posts}/>
                </div>
        </div>
    )
}