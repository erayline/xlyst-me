import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";

export default async function Home() {

  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
    <FirstSection loggedIn={session}/>
    <Footer/>
    </main>
  );
}
