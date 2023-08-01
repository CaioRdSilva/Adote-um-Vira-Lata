import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default  function SignOut() {
  const { data: session} = useSession()
  return (
    <div>
        { session ? (
          <div>
          <Link href="/protected">Perfil</Link>
          </div>
      ) : (<Link className="text-orange-500" href="/register">Sign In</Link>)}
    </div>
  );
}
