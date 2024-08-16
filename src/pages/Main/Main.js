import React from 'react'
import About from './About'
import FirstSwiper from './FirstSwiper'
import Address from './Address'
import AboutUs from './AboutUs'
import Rooms from './Rooms'
import Facilities from './Facilities'
import ExampleFacalities from './ExampleFacalities'
import BestApartaments from './BestApartaments'
import OurGallery from './OurGallery'
import MainMarquee from './MainMarquee'


export default function Main() {
  return (
    <div className='main__container'>
        <About />
        <FirstSwiper />
        <Address />
        <AboutUs />
        <Rooms />
        <Facilities />
        <ExampleFacalities />
        <BestApartaments />
        <OurGallery />
        <MainMarquee />
    </div>
  )
}
