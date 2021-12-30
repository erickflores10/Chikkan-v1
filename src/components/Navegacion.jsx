import logo720 from '../assets/logo-780.png';
import chikkanLogo from '../assets/ICONO DE CHIKKAN HOJA.png';

function Navegacion() {
    return <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-body">
        <div className="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={chikkanLogo} alt="" width="30" height="30" class="d-inline-block align-text-top" />
                    Chikkan
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Portada</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Destacados</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Ciencia</a></li>
                        <li><a className="dropdown-item" href="#">Arte</a></li>
                        <li><a className="dropdown-item" href="#">Tecnologia</a></li>
                        <li><a className="dropdown-item" href="#">Economia</a></li>
                        <li><a className="dropdown-item" href="#">E-Sports</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Nosotros</a>
                </li>
            </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button type="button" className="btn btn-primary btn-sm">Registrar</button>
        </form>
      </div>
    </div>
  </nav>
}

export default Navegacion;