import Head from 'next/head';
import NavBar from './navBar';
// eslint-disable-next-line import/namespace
import Header from './header';
import style from '../styles/layout.module.css';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>BodeBar</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <NavBar />
      <div className={style.container}>{children}</div>
      <Footer />
    </div>
  );
}
