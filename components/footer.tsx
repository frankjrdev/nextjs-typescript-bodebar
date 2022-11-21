import Link from 'next/link';
import style from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={style.footerContainer}>
        <div className={style.linkContainer}>
          <Link href="/whisky" className={style.link}>
            INICIO
          </Link>

          <Link href="/ron" className={style.link}>
            PRODUCTOS
          </Link>

          <Link className={style.link} href="/vinos">
            NOSOTROS
          </Link>

          <Link className={style.link} href="/destilados">
            TERMINOS Y CONDICIONES
          </Link>

          <Link className={style.link} href="/licores">
            PREGUNTAS FRECUENTES
          </Link>

          <Link className={style.link} href="/otros">
            CUENTA
          </Link>
        </div>
        <div>
          <p className={style.copright}>
            Copyright © 2022 Bodebar. Todos los Derechos Reservados.
            Desarrollado por Avila Tek{' '}
          </p>
        </div>
      </div>
    </footer>
  );
}
