import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import staTeresa from '../public/images/sta-Teresa.jpg';
import buchanans from "../public/images/buchanan's deluxe.png";
import fincaMora from '../public/images/finca_las_moras_malbec_3.png';
import style from '../styles/bestSellers.module.css';

export default function CarouselImages() {
  return (
    <div className={style.container}>
      <div className={style.title}>BEST SELLERS</div>
      <div className={style.bottlesContainer}>
        <div className={style.containerImage}>
          <Image alt="Sta Teresa" src={staTeresa} width={400} height={450} />
        </div>
        <div className={style.containerImageBuchanas}>
          <Image alt="Buchanan's" src={buchanans} width={460} height={660} />
          <div className={style.titleBuchanas}>
            <p>BUCHANAN'S DELUXE</p>
            <p>12 ANOS</p>
          </div>
        </div>
        <div className={style.containerImage}>
          <Image
            alt="Finca las moras"
            src={fincaMora}
            width={400}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
