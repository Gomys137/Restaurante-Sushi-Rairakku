// src/pages/index.js
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Menu from '../components/Menu';
import OrderOnline from '../components/OrderOnline';
import Location from '../components/Location';
import Footer from '../components/Footer';
import Navbar from "../components/NavBar";



export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Menu />
      <OrderOnline />
      <Location />
      <Footer />
    </div>
  );
}
