import Head from 'next/head'
import ProductScreen from '../components/ProductScreen'
import FeaturesScreen from '../components/Section/FeaturesScreen'
import styles from '../styles/Home.module.css'
import AboutScreen from '../components/Section/AboutScreen'
import BestproductScreen from '../components/BestproductScreen'

export default function Home() {
  return (

    <div className={styles.container}>

      <Head>
        <title>product review</title>
        <meta name="description" content="product review" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutScreen/>
      <ProductScreen/>
      <BestproductScreen/>
      <FeaturesScreen/>
      
    </div>
  )
}
