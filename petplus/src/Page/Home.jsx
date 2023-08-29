import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import About from '../Components/AboutUs/Aboutus'
import Services from '../Components/OurServices/Services'
import ChooseUs from '../Components/ChoosUs/ChooseUs'
import Appointment from '../Components/PlaceAppoinment/appointment'
import Team from '../Components/Team/Team'
import Pricing from '../Components/Pricing/Pricing'
import Testimonilals from '../Components/Testimonials/Testimonilals'
import Footer from '../Components/Footer/Footer'

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
        <Pricing/>
        <Testimonilals/>
        <Footer/>
    </div>
  )
}

export default Home