/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import ProductDetails from "./components/ProductDetails";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf9]">
      <Navbar />
      <Hero />
      <StorySection />
      <ProductDetails />
      <Gallery />
      <Footer />
    </div>
  );
}
