import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import HowWeWork from '../components/sections/how-we-work'
import Testimonials from '../components/sections/testimonials'
import Portfolio from '../components/sections/portfolio'
import Contact from '../components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowWeWork />
      <Testimonials />
      <Portfolio />
      <Contact />
    </>
  )
}
