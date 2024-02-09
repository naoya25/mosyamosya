import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pickup from "@/components/Pickup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <video autoPlay loop muted playsInline className="mt-[88px]">
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Pickup />
      <Feature />
      <Contact />
      <Footer />
    </main>
  );
}
