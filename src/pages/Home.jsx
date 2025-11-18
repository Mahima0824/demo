import React from 'react'
import Herosection from '../components/home/Herosection'
import About from '../components/home/About'
import Mission from '../components/home/Mission'
import Feature from '../components/home/Feature'
import Contact from '../components/home/Contact'

const Home = () => {
  return (
    <>
        <Herosection />
        <About />
        <Mission />
        <Feature />
        <Contact />
    </>
  )
}

export default Home