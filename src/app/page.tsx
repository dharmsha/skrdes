import Hero from '../components/Hero'
import  VideoShowcase from '../components/VideoShowcase'
import Courses from '../components/Courses'
import Features from '../components/Features'
import Quote from '../components/Quote'
import Contact from '../components/Contact'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Hero />
      
      <Courses />
      <VideoShowcase />
      <Features />
      <Quote />
      <Contact />
      <About />
    </>
  )
}