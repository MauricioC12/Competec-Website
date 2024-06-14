import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <AboutUs />
      <Partners />
      <Footer />
    </>
  );
}
