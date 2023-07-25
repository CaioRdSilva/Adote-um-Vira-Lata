import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
   CredentialsProvider({
      credentials: {
        email: { 
            label: "Email",
            type: "email",
        },
        name : {
          label: "Name",
          type: "text"
        },
        password: { 
            label: "Password", 
            type: "password" 
        },
      },
      async  authorize(credentials) {
        
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing username or password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!user || !(await compare(credentials?.password, user.password))) {
          throw new Error("Invalid username or password");
        }
        return user;
      },
    }),
  ],secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
