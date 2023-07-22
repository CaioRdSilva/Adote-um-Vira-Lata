"use client";
import { getSession, signOut } from "next-auth/react";

export default async function SignOut() {
    const session = await getSession()
  return (
    <div>
        { session ? (
      <button
        className="text-gray-500 hover:text-gray-700 transition-all"
        onClick={() => signOut()}
      >
        sign me out!
      </button>) : ('')}
    </div>
  );
}
