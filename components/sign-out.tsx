"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default  function SignOut() {
  const { data: session, status } = useSession()
  return (
    <div>
        { session ? (
      <button
        className="text-gray-500 hover:text-gray-700 transition-all"
        onClick={() => signOut()}
      >
        Sair de {session.user?.name}?
      </button>) : (<Link className="text-orange-500" href="/register">Sign In</Link>)}
    </div>
  );
}
