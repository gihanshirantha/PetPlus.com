import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import About from '../Components/AboutUs/Aboutus'
import Services from '../Components/Services/Services'
import ChooseUs from '../Components/ChoosUs/ChooseUs'
import Appointment from '../Components/PlaceAppoinment/appointment'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <ChooseUs/>
        <Appointment/>
    </div>
  )
}

export default Home