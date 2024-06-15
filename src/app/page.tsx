import { auth } from "@/app/api/auth/[...nextauth]/route";
import { Login } from "@/components/login";
import { Logout } from "@/components/logout";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <h1>Session:</h1>
      <div>{JSON.stringify(session, null, 2)}</div>
      <hr />

      <div>
        <Login />
      </div>
      <Logout />
    </main>
  );
}
