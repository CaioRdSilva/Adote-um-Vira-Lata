import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession, Session } from "next-auth";
export default async function checkrole() {
  const session: Session = await getServerSession(authOptions);
  if(session.user.role === 'ADMIN'){
    return true
  } else{
    return false
  }
}