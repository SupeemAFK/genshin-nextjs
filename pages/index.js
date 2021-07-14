import styles from '../styles/Home.module.css'

//components
import Hero from '../components/Hero'
import Content from '../components/Content'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Content />
      <Footer />
    </div>
  )
}
