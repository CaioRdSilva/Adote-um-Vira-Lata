"use client";

import { useState } from "react";
import { signIn } from 'next-auth/react'
import LoadingDots from "@/components/loading-dots";
import  toast  from "react-hot-toast";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Form({type}: {type: "login" | "register"}) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    return(
        <>
        <form
            onSubmit={(e)=> {
                e.preventDefault();
                setLoading(true);
                if(type === 'login'){
                    signIn("credentials", {
                        redirect: false,
                        email: e.currentTarget.email.value,
                        password: e.currentTarget.password.value,
                    }).then(({error})=> {
                        if(error) {
                            setLoading(false);
                            toast.error(error);
                        }else{
                            router.refresh();
                            router.push("/blog")
                        }
                    });
                } else {
                    fetch("/api/auth/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: e.currentTarget.email.value,
                            name: e.currentTarget.nome.value,
                            password: e.currentTarget.password.value,
                        }),
                    }).then(async (res) => {
                        setLoading(false);
                        if(res.status === 200) {
                            toast.success("Account created! Redirecting to login...")
                            setTimeout(() => {
                                router.push("/login");
                            }, 2000);
                        }else {
                            const { error } = await res.json();
                            toast.error(error)
                        };
                    });
                }
            }}
            className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
            >
                <div>
                    <label
                    htmlFor="email"
                    className="block text-xs text-gray-600 uppercase"
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="exemaple@gmail.com"
                        autoComplete="email"
                        required
                        className="mt-1 block w-full text-gray-600 appearence-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus :border-black focus:outline-none focus:ring-black sm:text-sm"
                    />
                </div>
                {type === 'register' ? (
                    <div>
                        <label htmlFor="nome"
                    className="block text-xs text-gray-600 uppercase"
                    >
                         Username
                    </label>
                    <input 
                        id="name"
                        name="nome"
                        type="text"
                        required
                        className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                    />
                    </div>
                ) : (' ')}
                <div>
                    <label
                     htmlFor="password"
                     className="block text-xs text-gray-600 uppercase"
                     >
                        Password
                    </label>
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                    />
                </div>
                <button
                disabled={loading}
                className={`${
                    loading ? "cursor-not-allowed border-gray-200 bg-gray-100" : "border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white"
                } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus: first-letter:outline-none `}
                >
                    {loading? (
                        <LoadingDots color="#8008080" />
                    ): (<p className="font-semibold">{type ==="login" ? "Singn In" : "Sign Up"}</p>)}
                </button>
                {type === "login" ? (
                    <p className="text-center text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="font-semibold text-gray-800">
                            Sign Up
                        </Link> {" "}
                        for free.
                    </p>
                ) : (
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}    
                        <Link href="/login" className="font-semibold text-gray-800">
                            Sign In
                        </Link>{" "}
                        instead.
                    </p>
                )}
        </form>
        </>
    )
}
