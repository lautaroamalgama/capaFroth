import { Link } from 'react-router-dom';

export default function ProductCard({ imageSrc, imageAlt, title, description, price, slug }) {
  return (
    <article className="product-card">
      <Link to={`/producto/${slug}`} className="card-link" aria-label={`Ver ${title}`}>
        <div className="product-image">
          <img src={imageSrc} alt={imageAlt} loading="lazy" />
        </div>
        <div className="product-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="product-actions">
            <span className="price">{price}</span>
            <span className="btn btn-primary">Ver</span>
          </div>
        </div>
      </Link>
    </article>
  );
}


