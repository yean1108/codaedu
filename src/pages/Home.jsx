import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCards from '../components/ServiceCards'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import './Home.css'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home">
      <Hero />
      <ServiceCards />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home
