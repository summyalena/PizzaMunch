import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import PizzaList from '../comps/PizzaList'
import Slider from '../comps/slider'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaMunch</title>
        <meta name="description" content="Best Pizza Restaurant in Nigeria" />
        <link rel="icon" href="/pizzamunch.ico" />
      </Head>
      <Slider/>
       <PizzaList/>
    </div>
  )
}
