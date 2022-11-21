import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/header.module.css';
import logo from '../public/images/bodeBarIcon.jpg';

export default function Header() {
  return (
    <div className={style.header}>
      <Image className={style.logo} alt="Logo" src={logo} />

      <div className={style.links}>
        <Link className={style.link} href="/products">
          PRODUCTOS
        </Link>

        <Link className={style.link} href="/moneda">
          MONEDA
        </Link>
      </div>
    </div>
  );
}
