import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Curriculum from "./components/Curriculum";
import Career from "./components/Career";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AboutUs from "./components/aboutus";
import WhatYouLearn from "./components/WhatYouLearn";
import KeyFeatures from "./components/KeyFeatures";
import WhyChooseUs from "./components/Whychooseus";
import HowToRegister from "./components/HowToRegister";
import Testimonials from "./components/Testimonial";
import WhatsAppTouch from "./components/WhatsappTpuch";
import FloatingIcons from "./components/FloatingIcons";
import OfferBanner from "./components/OfferBanner";
import OfferModal from "./components/OfferModal";
import FloatingOfferButton from "./components/FloatingOfferButton";
import CustomCursor from "./components/CustomCursor";
import AzureCursor from "./components/AzureCursor";
import SideFloatOffer from "./components/SideFloatOffer";
import BenefitsOfJoiningCourse from "./components/Benefits";

export default function App() {
  return (
    <>
      <CustomCursor />
      {/* <SideFloatOffer /> */}
      {/* <AzureCursor /> */}

      {/* <OfferBanner /> */}
      {/* <OfferModal/> */}
      {/* <OfferModal /> */}
      {/* <FloatingOfferButton /> */}
      <div>
        {/* <Navbar /> */}
        <Hero />
        <main className="relative z-0">
          <BenefitsOfJoiningCourse/>
          <AboutUs />
          <WhatYouLearn />
          <Curriculum />
          <KeyFeatures />
          <WhyChooseUs />
          <HowToRegister />
          <Testimonials />
          <FAQ />
          <WhatsAppTouch />
          <Footer />
        </main>
        <FloatingIcons />
        {/* <Stats /> */}
        {/* <Features /> */}
        {/* <Curriculum /> */}
        {/* <Career /> */}
        {/* <FAQ /> */}
        {/* <CTA /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
