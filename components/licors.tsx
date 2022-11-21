import Image from 'next/image';
import style from '../styles/licors.module.css';
import cacique500 from '../public/images/cacique500.jpg';
import espanola from '../public/images/laEspañola.jpg';
import vodka from '../public/images/greygoose.jpg';
import blacklabel from '../public/images/blacklabel.jpg';

export default function Licors() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>LICORES</h2>
      <div className={style.botleContainer}>
        <div className={style.productContainer}>
          <Image alt="Cacique 500" src={cacique500} width={320} height={320} />
          <p className={style.titleProduct}>Licor 1</p>
          <p className={style.priceProduct}>$ 99,99</p>
        </div>
        <div className={style.productContainer}>
          <Image alt="Cacique 500" src={espanola} width={320} height={320} />
          <p className={style.titleProduct}>Licor 1</p>
          <p className={style.priceProduct}>$ 99,99</p>
        </div>
        <div className={style.productContainer}>
          <Image alt="Cacique 500" src={vodka} width={320} height={320} />
          <p className={style.titleProduct}>Licor 1</p>
          <p className={style.priceProduct}>$ 99,99</p>
        </div>
        <div className={style.productContainer}>
          <Image alt="Cacique 500" src={blacklabel} width={320} height={320} />
          <p className={style.titleProduct}>Licor 1</p>
          <p className={style.priceProduct}>$ 99,99</p>
        </div>
      </div>
      <div className={style.botleContainer}>
        <div className={style.productContainer}>
          <Image alt="Cacique 500" src={cacique500} width={320} height={320} />
          <p className={style.titleProduct}>Licor 1</p>
          <p className={style.priceProduct}>$ 99,99</p>
        </div>
        <div className={style.productContainer}>
          <Image alt="Cacique 500" src={espanola} width={320} height={320} />
          <p className={style.titleProduct}>Licor 1</p>
          <p className={style.priceProduct}>$ 99,99</p>
        </div>
        <div className={style.productContainer}>
          <Image alt="Cacique 500" src={vodka} width={320} height={320} />
          <p className={style.titleProduct}>Licor 1</p>
          <p className={style.priceProduct}>$ 99,99</p>
        </div>
        <div className={style.productContainer}>
          <Image alt="Cacique 500" src={blacklabel} width={320} height={320} />
          <p className={style.titleProduct}>Licor 1</p>
          <p className={style.priceProduct}>$ 99,99</p>
        </div>
      </div>
    </div>
  );
}
