import checkrole  from "@/app/api/auth/role/route";
import React from "react";

export default async function Layout({
    admin ,
    user
}: {
    admin: React.ReactNode,
    user: React.ReactNode
}) {
    const role = await checkrole()
    return <> {role ? admin : user} </>
}