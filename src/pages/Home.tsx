import Benefitis from "@/comp/Benefitis";
import Clients from "@/comp/Clients";
import CTA from "@/comp/CTA";
import Footer from "@/comp/Footer";
import Hero from "@/comp/Hero";
import Integrations from "@/comp/Integrations";
import Navbar from "@/comp/Navbar";
import WhatsappButton from "@/comp/WhatsappButton";




function Home() {
  
 return (
    
    <main className="bg-slate-950 text-white overflow-hidden w-full">
      <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[150px]" /> </div>

    <Navbar />
    <Hero />
    <Benefitis/>
    <Clients/>
    <Integrations/>
    <CTA/>
    <Footer/>
    <WhatsappButton />

    </main>
  );
}

export default Home;