import Hero from '../components/sections/hero'
import Services from '../components/sections/services'
import HowWeWork from '../components/sections/how-we-work'
import About from '../components/sections/about'
import Testimonials from '../components/sections/testimonials'
import Portfolio from '../components/sections/portfolio'
import Team from '../components/sections/team'
import Contact from '../components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeWork />
      <About />
      <Testimonials />
      <Portfolio />
      <Team />
      <Contact />
    </>
  )
}
