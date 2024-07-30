import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <></> 

  let username="";
  if(session) username = session.user.username;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
    <FirstSection loggedIn={session} username={username}/>
    <Footer/>
    </main>
  );
}
