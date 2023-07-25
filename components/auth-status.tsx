import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AuthStatus() {
  const session = await getServerSession(authOptions);
  return (
    <div >
      {session && (
        <h3 className="text-gray-500 text-sm">
          Signed in as {session.user?.name}
        </h3>
      )}
    </div>
  );
}
