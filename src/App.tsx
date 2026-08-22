import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";

// import Testimonials2 from "./components/Testimonials2";
import Process from "./components/Process";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsappFloat";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Testimonials />
        {/* <Testimonials2 /> */}
        <Process />
        <Services />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
