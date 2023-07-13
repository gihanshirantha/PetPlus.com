import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import About from '../Components/AboutUs/Aboutus'
import Services from '../Components/Services/Services'
import ChooseUs from '../Components/ChoosUs/ChooseUs'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <ChooseUs/>
    </div>
  )
}

export default Home