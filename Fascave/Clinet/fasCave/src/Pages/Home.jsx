import React from 'react'
import OurClient from '../Componets/Home/OurClinet'
import OurPatners from '../Componets/Home/OurPatners'
import WhyChooseUs from '../Componets/Home/WhyChooseUs'
import ClientCard from '../Componets/Home/ClientCard'
import ClientTestimonials from '../Componets/Home/ClientTestimonials'
import HeroSection from '../Componets/Home/HeroSection'
import ScrolingCard from '../Componets/Home/scrolingCard'
import OurPortfolioScrollRight from '../Componets/Home/OurPortfolioScrollRight'

export default function Home() {
  return (
    <div>
      Home
    <HeroSection/>

      <OurClient/>

      <hr />

      <ScrolingCard/>

      <hr />

      <OurPortfolioScrollRight/>

      <WhyChooseUs/>

      <hr/>

      <OurPatners/>

      <hr/>

      <ClientTestimonials/>  
    </div>
  )
}
