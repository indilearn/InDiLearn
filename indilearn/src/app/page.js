import Carousel from '@/components/Carousel'
import styles from './page.module.css'
import AdditionalComp from '@/components/AdditionalComp'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Hello All </h1>
      <Carousel/>
      <AdditionalComp/>
      <a href='/login'> Login </a>
    </main>
  )
}
