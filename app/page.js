import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <AboutUs />
      <Partners />
      <BlogSection />
      <Footer />
    </>
  );
}
