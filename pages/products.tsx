import Image from 'next/image';
import Layout from '../components/layout';
import style from '../styles/products.module.css';
import bannerProducts from '../public/images/bannerProducts.jpg';

export default function Products() {
  return (
    <Layout>
      <Image
        alt="Banner"
        src={bannerProducts}
        className={style.bannerProduct}
        width="1920"
      />
      ;
    </Layout>
  );
}
