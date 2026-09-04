import Navbar from '../components/portfolio/Navbar';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Cases from '../components/portfolio/Cases';
import Products from '../components/portfolio/Products';
import Speaking from '../components/portfolio/Speaking';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Cases />
      <Speaking />
      <Contact />
      <Footer />
    </div>
  );
}