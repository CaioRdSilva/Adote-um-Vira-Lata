import { IPost } from "./types/posts"

const baseUrl = 'http://localhost:3001'

export const getAllPosts = async (): Promise<IPost[]> => {

    const res = await fetch(`${baseUrl}/Posts`);
    const posts = await res.json();

    return posts;
}