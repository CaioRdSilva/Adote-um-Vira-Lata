import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const { title }= await req.json();
    const userid = await getServerSession()
    const email = userid.user.email
    const post = await prisma.post.create({
        data:{
            title,
            user: {
                connect: {email}
            }
        },
    })
    return NextResponse.json(post);
}
