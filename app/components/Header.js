import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/images/logo.png'; 
import '/app/styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="#">
            <Image src={Logo} alt="logo" width={180}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#about">Nosotros</a>
              <a className="nav-link" href="#services">Servicios</a>
              <a className="nav-link" href="#gallery">Trabajos</a>
              <Link className="nav-link" href="#contact">Contacto</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Header;