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
      <body className={`${inter.className}`}>
        {children}
        <BootstrapClient/>
      </body>
    </html>
  );
}
