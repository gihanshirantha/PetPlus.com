import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import About from '../Components/AboutUs/Aboutus'
import Services from '../Components/Services/Services'
import ChooseUs from '../Components/ChoosUs/ChooseUs'
import Appointment from '../Components/PlaceAppoinment/appointment'
import Team from '../Components/Team/Team'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <ChooseUs/>
        <Appointment/>
        <Team/>
    </div>
  )
}

export default Home