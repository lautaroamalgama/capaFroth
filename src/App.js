import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Products />
              <About />
              <Contact />
            </>
          } />
          <Route path="/producto/:slug" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
