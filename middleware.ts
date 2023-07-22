import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname;

    if(path === "/"){
        return NextResponse.next();
    }

    return NextResponse.next();
}