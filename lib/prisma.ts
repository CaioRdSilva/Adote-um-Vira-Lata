import { PrismaClient, user_role } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

declare module 'next-auth' {
  interface User {
    id: number; // <- here it is
    role?: user_role;
  }
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;