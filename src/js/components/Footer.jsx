import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>Mi Sitio</h5>
            <p>&copy; 2025 Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-white text-decoration-none me-3">Privacidad</a>
            <a href="#" className="text-white text-decoration-none">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
