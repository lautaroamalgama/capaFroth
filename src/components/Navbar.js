export default function Navbar() {

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="/" className="logo">
          <img src="https://plus.unsplash.com/premium_photo-1723924952467-64b43054fb66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2970" alt="CIAMEI" loading="lazy" />
          <span>CIAMEI</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#productos">Productos</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


