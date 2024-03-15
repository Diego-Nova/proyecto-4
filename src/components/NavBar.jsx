const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
{/*ENCABEZADO*/}
      <div className="container">
        <a className="navbar-brand" href="#">
          SEAFOOD
        </a>
        
        <div className="#" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nosotros
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nuestro Menú
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Barra Fria
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    De la plancha a la mesa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Platillos Internacionales
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menú Infantil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Nuestras Bebidas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Nuestros Postres
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contacto
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Tel. 222-345500
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Email: altacocina@seafood.com
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
