import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      {/* <p>Get Server Session</p>
      {
        session?.user?.name ? (
          <div>{session?.user.name}</div>
        ) : (
          <div>No logged in</div>
        )
      } */}
    </main>
  )
}
