import Form from "@/components/form"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SingIn",
  description: "Adote um Vira Lata",
};

export default function login() {

  return (
    <div className="flex items-center justify-center ">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/images/LOGO.webp"
              priority
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form type="register" />
      </div>
    </div>
  );
}

 /*       <form action={handleSubmit} className="grid content-center">
          <label className="font-poppins font-bold text-md">
            Email:
            <input
              type="email"
              name="email"
              className="block border-solid border-2 rounded-full mb-2 pl-2 focus:outline-none required:border-orange-500 valid:border-green-900"
              required
            />
          </label>
          <label className="font-poppins font-bold text-md">
            Senha:
            <input
              type="password"
              name="password"
              className=" block border-solid border-2 rounded-full mb-2 pl-2 focus:outline-none required:border-orange-500 valid:border-green-900"
              required
            />
          </label>
          <label className="font-poppins font-bold text-md">
            Repetir senha:
            <input
              type="password"
              name="Repetpassword"
              className=" block border-solid border-2 rounded-full mb-4 pl-2 focus:outline-none required:border-orange-500 valid:border-green-900"
              required
            />
          </label>
          <button
            type="submit"
            className="font-poppins font-bold text-md border-solid border-2 rounded-full border-green-900 hover:bg-green-900 hover:text-white"
          >
            Submit
          </button>
        </form>
        */