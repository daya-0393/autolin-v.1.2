import 'bootstrap/dist/css/bootstrap.css';
import "/app/styles/main.scss";
import BootstrapClient from './components/BootstrapClient';
import '/app/styles/main.scss';
import { inter } from '@/app/fonts';

export const metadata = {
  title: "Autolin | Taller Automotriz",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sp">
      <head>
        <link href='../assets/fontawesome/css/fontawesome.css' rel='stylesheet'/>
        <link href='../assets/fontawesome/css/solid.css'/>
      </head>
      <body className={`${inter.className}`}>
        {children}
        <BootstrapClient/>
      </body>
      <script src="https://kit.fontawesome.com/da33aea8dd.js" crossOrigin="anonymous" async></script>
    </html>
  );
}
