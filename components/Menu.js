import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'


const Menu = () => {
  const router = useRouter();
  return(
  <div className="container flex justify-between items-center pt-10 pb-10">
    <Link href="/">
    <Image className="w-10 md:w-20 lg:w-20" width={1000} height={1000} contain src="/images/LOGO.webp"/>
    </Link>
    <ul className="flex gap-6 font-poppins font-bold text-lg">
      <li>
        <Link className={router.pathname == "/blog" ? "text-green-900" : "hover:text-green-900"} href="/blog">Blog</Link>
      </li>
      <li>
        <Link className={router.pathname == "/podcast" ? "text-green-900" : "hover:text-green-900"} href="/podcast">Podcast</Link>
      </li>
      <li>
        <Link className={router.pathname == "/eventos" ? "text-green-900" : "hover:text-green-900"} href="/eventos">Eventos</Link>
      </li>
      <li>
        <Link className={router.pathname == "/galeria" ? "text-green-900" : "hover:text-green-900"} href="/galeria">Galeria</Link>
      </li>
      <li>
        <Link className="text-orange-500" href="/galeria">Sing-in</Link>
      </li>
      <li>
        <Link className="text-orange-500" href="/galeria">Login</Link>
      </li>
    </ul>
  </div>
  )
};

export default Menu;
