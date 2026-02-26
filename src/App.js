import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatIsReiki from "./pages/WhatIsReiki";
import Classes from "./pages/Classes";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop'; // ✅ import
import "./App.css";
import ChakraDetail from "./pages/ChakraDetail";
import MikaoUsui from "./pages/masters/MikaoUsui";
import ChujiroHayashi from "./pages/masters/ChujiroHayashi";
import HawayoTakata from "./pages/masters/HawayoTakata";
import PhyllisLeiFurumoto from "./pages/masters/PhyllisLeiFurumoto";
import WilliamLeeRand from "./pages/masters/WilliamLeeRand";
import UnderConstruction from "./pages/UnderConstruction";

function PageWrapper() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main
      className="page-main"
      style={
        isHome
          ? {} // Home keeps its own gradient
          : {
              backgroundImage: "url('/images/Hologram_BG.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              minHeight: "100vh"
            }
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-is-reiki" element={<WhatIsReiki />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chakras/:slug" element={<ChakraDetail />} />
      <Route path="/masters/mikao-usui" element={<MikaoUsui />} />
      <Route path="/masters/chujiro-hayashi" element={<ChujiroHayashi />} />
      <Route path="/masters/hawayo-takata" element={<HawayoTakata />} />
      <Route path="/masters/phyllis-lei-furumoto" element={<PhyllisLeiFurumoto />} />
      <Route path="/masters/william-lee-rand" element={<WilliamLeeRand />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />   {/* ✅ add this line, nothing else */}
      <div className="App">
        <Navbar />
        <PageWrapper />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
