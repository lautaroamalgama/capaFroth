export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <span>© {new Date().getFullYear()} CIAMEI</span>
        <nav>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}


