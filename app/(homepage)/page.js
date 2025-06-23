import React from 'react'
import Hero from './hero'
import About from './about'
import Services from './services'
import Philosophy from './philosophy'
import CallToAction from './cta'
import Testimonials from './testimonials'
import FAQ from './faq'
import InstaFeed from './instafeed'


export default function page() {
  return (
    <div>
      <Hero/>
      <About/>
     <Services/>
      
      <Philosophy/>
      <Testimonials/>
      <InstaFeed/>
      <FAQ/>
      <CallToAction/>
    </div>
  )
}
