import { IPost } from "./types/posts"

const baseUrl = 'http://localhost:3001'

export const getAllPosts = async (): Promise<IPost[]> => {

    const res = await fetch(`${baseUrl}/Posts`, { next: { revalidate: 10 } });
    const posts = await res.json();

    return posts;
}