/* eslint-disable prettier/prettier */
import Link from 'next/link';
import style from '../styles/navbar.module.css';

export default function NavBar() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbarContainer}>
        <Link href="/whisky" className={style.link}>
          WHISKY
        </Link>

        <Link href="/ron" className={style.link}>
          RON
        </Link>

        <Link className={style.link} href="/vinos">
          VINOS
        </Link>

        <Link className={style.link} href="/destilados">
          DESTILADOS
        </Link>

        <Link className={style.link} href="/licores">
          LICORES
        </Link>

        <Link className={style.link} href="/otros">
          OTROS
        </Link>

        <Link className={style.link} href="/ofertas">
          OFERTAS
        </Link>
      </div>

      <div />
    </nav>
  );
}
