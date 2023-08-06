import Head from 'next/head'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import AboutMe from '@/components/AboutMe'

export default function Home (): JSX.Element {
  return (
  <>
      <Head>
        <title>Luciano Fernández - Portafolio Web</title>
        <meta name='title' content='Luciano Fernández - Portafolio Web' />
        <meta name='description' content='Portafolio personal de Luciano Fernández, desarrollador web front-end' />
        <meta name='application-name' content='Luciano Fernández' />
        <meta name='apple-mobile-web-app-title' content='Luciano Fernández' />
        <meta property='og:title' content='Luciano Fernández - Portafolio Web' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://portfolio-zeta-five-47.vercel.app/lf-logo.webp' />
        <meta property='og:url' content='https://portfolio-zeta-five-47.vercel.app/' />
        <meta property='og:description' content='Portafolio personal de Luciano Fernández, desarrollador web front-end' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:site_name' content='Luciano Fernández' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@luchofseven' />
        <meta name='twitter:creator' content='@luchofseven' />
        <meta name='twitter:title' content='Luciano Fernández - Portafolio Web' />
        <meta name='twitter:description' content='Portafolio personal de Luciano Fernández, desarrollador web front-end' />
        <meta name='twitter:image' content='https://portfolio-zeta-five-47.vercel.app/lf-logo.webp' />
        <meta name='twitter:domain' content='portfolio-zeta-five-47.vercel.app' />
        <meta name='twitter:url' content='https://portfolio-zeta-five-47.vercel.app/' />
      </Head>
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
