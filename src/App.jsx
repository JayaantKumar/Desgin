import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // 1. Import the new component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Subjects from "./pages/Subjects";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ"; 
import Privacy from "./pages/Privacy"; 
import Terms from "./pages/Terms"; 

export default function App() {
  return (
    <BrowserRouter>
      {/* 2. Place it right here, just inside the BrowserRouter */}
      <ScrollToTop /> 
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} /> 
            <Route path="/privacy-policy" element={<Privacy />} /> 
            <Route path="/terms-of-service" element={<Terms />} /> 
          </Routes>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </BrowserRouter>
  );
}