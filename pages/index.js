import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import HomePage from "../components/homepage";
import img from "../public/hpimg.jpeg";
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
    
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
