import NextAuth, { DefaultSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";
import { user_role } from "@prisma/client";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id?: number;
    } & DefaultSession["user"] &
      User;
  }
  interface User {
    role?: user_role;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
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
        }
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
        return {
          id: user.id,
          email: user.email,
          password: user.password,
          role: user.role
        }
      },
    }),
  ],secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({session, token}) => {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role
        }
      }
    },jwt: ({token, user}) => {
      if(user){
        return{
          ...token,
          role: user.role
        }
      }
      return token
    },
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
