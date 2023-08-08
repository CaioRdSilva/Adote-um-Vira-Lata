"use client";
import { signOut } from "next-auth/react";

export default function perfil() {
  return (
    <>
      <h1>teste user</h1>
      <button onClick={() => signOut()}>Sair</button>
    </>
  );
}
