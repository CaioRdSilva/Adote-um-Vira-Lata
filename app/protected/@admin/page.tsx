'use client'
import { signOut } from "next-auth/react";

export default function perfil () {
    return (
        <div>
            <h1>teste admin</h1>
            <button onClick={() => signOut()}>
        Sair
            </button>
        </div>
    );
}