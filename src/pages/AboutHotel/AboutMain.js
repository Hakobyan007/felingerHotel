import React from 'react'
import AboutName from './AboutName'
import AboutDescription from './AboutDescription'
import AboutReseption from './AboutReseption'
import AboutAccommodations from './AboutAccommodations'

export default function AboutMain() {
  return (
    <div className='aboutHotel__main__container'>
        <AboutName />
        <AboutDescription />
        <AboutReseption />
        <AboutAccommodations />
    </div>
  )
}
