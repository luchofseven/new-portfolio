import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import AboutMe from '@/components/AboutMe'
import FooterMessage from '@/components/FooterMessage'

export default function Home (): JSX.Element {
  return (
    <>
      <Navbar />
      <section className="main-app">
        <Hero />
        <Projects />
        <AboutMe />
        <Footer />
        <FooterMessage />
      </section>
    </>
  )
}
