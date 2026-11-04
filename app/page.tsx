import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Platform from "@/components/Platform";
import WhyConsulting from "@/components/WhyConsulting";
import Consulting from "@/components/Consulting";
import HowItWorks from "@/components/HowItWorks";
import Safe from "@/components/Safe";
import ForExperts from "@/components/ForExperts";
import Faq from "@/components/Faq";
import Lookbook from "@/components/Lookbook";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import Toast from "@/components/Toast";
import AppRedirect from "@/components/AppRedirect";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <AppRedirect />
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <Platform />
        <WhyConsulting />
        <Consulting />
        <HowItWorks />
        <Safe />
        <ForExperts />
        <Faq />
        <Lookbook />
        <Download />
      </main>
      <Footer />
      <MobileBar />
      <Toast />
    </>
  );
}
