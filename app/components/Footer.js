import { FacebookIcon, MapsIcon, WhatsappIcon } from "./icons";
import '/app/styles/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="media-nav">
        <a href="https://www.facebook.com/autolin2018/?locale=es_LA" className="nav-item" target="_blank"><FacebookIcon/></a>
        <a href="https://maps.app.goo.gl/aw7K1QJbSijv9MBB6" className="nav-item" target="_blank"><MapsIcon/></a>
        <a href="https://wa.me/+5060139787" className="nav-item" target="_blank"><WhatsappIcon/></a>
      </div>
      © {new Date().getFullYear()} Autolin. All rights reserved.
    </footer>
  )
}

export default Footer;