'use client'

import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";
import Reviews from "./components/sections/Reviews";
import Contact from "./components/sections/Contact";
import { useEffect } from "react";

export default function Home() {

  return (
    <Layout>
      <Hero/>
      <About/>
      <Services/>
      <Gallery/>
      <Reviews/>
      <Contact/>
    </Layout>
  );
}
