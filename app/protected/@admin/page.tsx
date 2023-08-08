"use client";
import { signOut } from "next-auth/react";
import PopUp from "@/components/modal";

export default function perfil() {
  return (
    <>
    <div className="flex items-center flex-col">

      <h1>teste admin</h1>


      <PopUp />




      <button className="mt-10 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white flex h-10 w-40 items-center justify-center rounded-md border text-sm transition-all focus: first-letter:outline-none"
       onClick={() => signOut()}>Sair</button>
       </div>
    </>
  );
}
