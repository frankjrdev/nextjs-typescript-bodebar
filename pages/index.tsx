/* eslint-disable import/namespace */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import Image from 'next/image';
import BestSeller from '../components/bestseller';
import Layout from '../components/layout';
import style from '../styles/home.module.css';
import path from '../public/images/cover-principal.jpg';
import loremImage from '../public/images/loreImage.jpg';
import Licors from '../components/licors';

function Home() {
  return (
    <div className={style.main}>
      <Layout>
        <div className={style.imageContainer}>
          <Image src={path} alt="Cover" layout="fill" className={style.image} />
        </div>

        <BestSeller />

        <div className={style.imageContainerLorem}>
          <Image
            src={loremImage}
            alt="Cover"
            layout="fill"
            className={style.image}
          />
          <div>
            <p className={style.loremTitle}>Lorem ipsum dolor sit amet</p>
            <p className={style.loremText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              phasellus nullam facilisis quis commodo risus. Auctor vel ac,
              malesuada et sit.{' '}
            </p>
          </div>
        </div>

        <Licors />
      </Layout>
    </div>
  );
}

export default Home;
