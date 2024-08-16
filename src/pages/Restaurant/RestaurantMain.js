import React from 'react'
import RestaurantName from './RestaurantName'
import RestaurantsImages from './RestaurantsImages'
import RestaurantDescription from './RestaurantDescription'
import RestaurantDecoration from './RestaurantDecoration'

export default function RestaurantMain() {
  return (
    <div className='restaurant__main__container'>
        <RestaurantName />
        <RestaurantsImages />
        <RestaurantDescription />
        <RestaurantDecoration />
    </div>
  )
}
