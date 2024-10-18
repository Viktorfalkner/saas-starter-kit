import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import ReviewCarousel from "./components/ReviewCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ReviewCarousel /> */}
      {/* <Pricing /> */}
      <Footer />
    </>
  );
}
