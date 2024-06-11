import Link from "next/link";
import { FacebookIcon, MapsIcon, WhatsappIcon } from "./icons";
import '/app/styles/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="media-nav">
        <Link href="https://www.facebook.com/autolin2018/?locale=es_LA" className="nav-item" target="_blank"><FacebookIcon/></Link>
        <Link href="https://maps.app.goo.gl/aw7K1QJbSijv9MBB6" className="nav-item" target="_blank"><MapsIcon/></Link>
        <Link href="https://wa.me/+5060139787" className="nav-item" target="_blank"><WhatsappIcon/></Link>
      </div>
      © {new Date().getFullYear()} Autolin. All rights reserved.
    </footer>
  )
}

export default Footer;