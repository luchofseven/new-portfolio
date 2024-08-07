import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import AboutMe from '@/components/AboutMe'

export default function Home (): JSX.Element {
  return (
  <>
      <Navbar />
      <main className="main-app">
        <Hero />
        <Projects />
        <AboutMe />
        <Footer />
      </main>
  </>
  )
}
