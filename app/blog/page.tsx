import { getAllPosts } from "../../api";
import Post from "../../components/Post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Adote um Vira Lata",
};

export default async function blogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="">
        <Post posts={posts} />
      </div>
    </>
  );
}
