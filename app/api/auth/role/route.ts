import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
export default async function checkrole() {
  const session = await getServerSession(authOptions);
  if(session.user.role === 'ADMIN'){
    return true
  } else{
    return false
  }
}