import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import products from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [imageUrl, setImageUrl] = useState('https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1049');

  useEffect(() => {
    setImageUrl('https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1049');
  }, [slug, product?.title]);

  if (!product) {
    return (
      <main className="section">
        <div className="container">
          <p>Producto no encontrado.</p>
          <Link className="btn" to="/">Volver</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={imageUrl} alt={`${product.title} - imagen`} loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="product-detail-info">
            <h1>{product.title}</h1>
            <p className="muted">{product.description}</p>
            <div className="detail-attrs">
              <span><strong>Proceso:</strong> {product.process}</span>
              <span><strong>Notas:</strong> {product.notes}</span>
              <span><strong>Peso:</strong> {product.weight}</span>
            </div>
            <div className="detail-actions">
              <span className="price">{product.price}</span>
              <button className="btn btn-primary">Añadir al carrito</button>
              <Link className="btn" to="/">Seguir comprando</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


