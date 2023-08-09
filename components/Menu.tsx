'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image'
import SignIn from "@/components/sign-in";

const Menu = () => {
  const router = usePathname();
  return(
    <>
  <div className="container flex justify-between items-center pt-10 pb-10">
    <Link href="/">
    <Image className="w-10 md:w-20 lg:w-20" priority width={1000} height={1000} alt="logo" src="/images/LOGO.webp"/>
    </Link>
    <ul className="flex gap-6 font-poppins font-bold text-lg">
      <li>
        <Link className={router == "/blog" ? "text-green-900" : "hover:text-green-900"} href="/blog">Blog</Link>
      </li>
      <li>
        <Link className={router == "/podcast" ? "text-green-900" : "hover:text-green-900"} href="/podcast">Podcast</Link>
      </li>
      <li>
        <Link className={router == "/eventos" ? "text-green-900" : "hover:text-green-900"} href="/eventos">Eventos</Link>
      </li>
      <li>
        <Link className={router == "/galeria" ? "text-green-900" : "hover:text-green-900"} href="/galeria">Galeria</Link>
      </li>
      <li>
        <SignIn />
      </li>
    </ul>
  </div>
  </>
  )
};

export default Menu;
