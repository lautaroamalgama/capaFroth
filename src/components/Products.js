import { useEffect, useRef, useCallback } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';


export default function Products() {
  const REPEAT = 3; // duplicamos el listado para simular infinito
  const scrollerRef = useRef(null);
  const rowRef = useRef(null);

  const baseProducts = products.map((p, i) => ({
    ...p,
    imageSrc: 'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1049',
    imageAlt: 'Foto de café (Unsplash+)',
  }));
  const loopedProducts = Array.from({ length: REPEAT }).flatMap(() => baseProducts);

  
  useEffect(() => {
    const scroller = scrollerRef.current;
    const row = rowRef.current;
    if (!scroller || !row) return;
    const totalWidth = row.scrollWidth;
    const singleSetWidth = totalWidth / REPEAT;
    scroller.scrollLeft = singleSetWidth; 
  }, []);

  const normalizeScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    const row = rowRef.current;
    if (!scroller || !row) return;
    const totalWidth = row.scrollWidth;
    const singleSetWidth = totalWidth / REPEAT;
    const left = scroller.scrollLeft;
    const threshold = 24; // margen para realinear sin parpadeo

    
    if (left <= threshold) {
      scroller.scrollLeft = left + singleSetWidth;
      return;
    }
    
    if (left + scroller.clientWidth >= totalWidth - threshold) {
      scroller.scrollLeft = left - singleSetWidth;
      return;
    }
  }, []);

  const scrollByCards = useCallback((direction) => {
    const scroller = scrollerRef.current;
    const row = rowRef.current;
    if (!scroller || !row) return;
    const firstCard = row.querySelector('.product-card');
    const styles = window.getComputedStyle(row);
    const gap = parseFloat(styles.columnGap || styles.gap || '16');
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + gap : 280;
    scroller.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  }, []);

  return (
    <section id="productos" className="section">
      <div className="container">
        <h2 className="section-title">Nuestros cafés</h2>
        <div
          className="products-scroller"
          role="region"
          aria-label="Listado de cafés"
          ref={scrollerRef}
          onScroll={normalizeScroll}
        >
          <div className="products-row" ref={rowRef}>
            {loopedProducts.map((p, idx) => (
              <ProductCard key={`${p.title}-${idx}`} {...p} />
            ))}
          </div>

          <button
            className="carousel-btn left"
            aria-label="Anterior"
            onClick={() => scrollByCards(-1)}
          >
            ‹
          </button>
          <button
            className="carousel-btn right"
            aria-label="Siguiente"
            onClick={() => scrollByCards(1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}


