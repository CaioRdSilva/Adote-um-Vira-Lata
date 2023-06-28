import Image from 'next/image'
import { IPost } from '../types/posts'
import React from 'react'

interface PostListProps {
    posts: IPost[]
}

const Post: React.FC<PostListProps> = ({ posts }) => (
    <div className='flex md:lg:xl:2xl:flex sm:block bg-[#fafafa] min-h-[min(20em, 320px)] min-w-[min(100%, 752px)] m-2 rounded-xl drop-shadow-md'>

        <ImagemPost />
        
        <div className='md:lg:xl:2xl:w-[60%] md:xl:h-full'>
        <div className='mx-5 my-2'>
            <div className='w-full'>
            <div>
        {posts.map(post => (

            <h1 className='text-xl font-bold md:max-2xl:text-2xl' key={post.id}>{post.text}</h1>
        ))}
    </div>
                <TipoleituraPost />
                <AutorPost />
            </div>
            <div className='py-1 '>
                <DescPost />
            </div>
            
            <div className='flex justify-between'>
                <InteracoesPost />
                <DataPost />
            </div>
        </div>
    </div>
        
    </div>
)



const ImagemPost = () => (
    <div className='relative aspect-square sm:aspect-video md:lg:xl:2xl:aspect-[4/3]'>
            <Image 
                className='object-cover object-center rounded-l-xl md:lg:xl:2xl:rounded-l-xl md:lg:xl:2xl:rounded-t-none sm:rounded-bl-none sm:rounded-t-xl'
                fill={true}
                sizes='(min-width: 768px) 40vw, (min-width: 1200px) 50vw, 33vw'
                alt='Post-Image'
                src="/images/banner.webp"/>
    </div>
)

const TipoleituraPost = () => (
    <div className='inline-flex md:max-2xl:text-xl'>
        <div><h2 className='text-orange-400 text-ms text-bold'>Adoção</h2></div>
        <div className='mx-2'><h1>•</h1></div>
        <div><h2 className='text-ms'>4 min</h2></div>
    </div>
)
const AutorPost = () => (
    <div className='flex text-xl'>
        <div className='mr-2 relative w-[35px] h-[35px] bg-black rounded-full'>
        <Image 
                className='full-rounded'
                fill
                src='/images/LOGO.webp' alt={''}/>
        </div>
        
        <h3 className='mx-0 my-auto text-xl'>Adote Um Vira-Lata</h3>
    </div>
)
const DescPost = () => (
    <div className='mx-2'>
        <p className=''>Universidade Federal de Pernambuco - UFPE Pró-reitora de extensão e cultura Centro de Biociências Departamento de Histologia e...</p>
    </div>
)
const InteracoesPost = () => (
    <div className=''>
        <div className='inline-flex text-center'>
            <svg className='fill-[#E84A43] w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
            </svg>
            <h3 className='mx-2 text-xl'>123</h3>
        </div>
   </div>
)
const DataPost = () => (
    <div className='mx-0 my-auto'>
        <h2 className='text-xl'>14 de set. de 2020</h2>
    </div>
)
export default Post;

