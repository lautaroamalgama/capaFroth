import { useEffect, useState } from 'react';

export default function Hero() {
  const [heroUrl, setHeroUrl] = useState('https://source.unsplash.com/random/800x600/?coffee');

  useEffect(() => {
    setHeroUrl('https://source.unsplash.com/random/800x600/?coffee');
  }, []);

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>CIAMEI: café de especialidad en Roma</h1>
          <p>Granos seleccionados, tostado fresco y experiencias de café en el corazón de la ciudad.</p>
          <div className="hero-ctas">
            <a href="#productos" className="btn btn-primary">Comprar ahora</a>
            <a href="#nosotros" className="btn">Saber más</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroUrl} alt="Paquetes de café CIAMEI" />
        </div>
      </div>
    </section>
  );
}


