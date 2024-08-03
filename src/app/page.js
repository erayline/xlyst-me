import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
    <FirstSection/>
  <SecondSection/>
    {/* <ThirdSection/> */}
    <Footer/>
    </main>
  );
}
