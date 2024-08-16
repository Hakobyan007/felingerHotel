import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {TbOctagon} from 'react-icons/tb'



export default function ContactName() {
  return (
    <>
    <div className='contact__name__container'>
        <h4 data-aos="fade-down-right">Felinger Hotel<span data-aos="fade-up">'</span>s <span  data-aos="fade-up-left">Contacts</span></h4>
        <div
         data-aos="fade-up-left"
            className="octagon__container rooms__octagon"
            onClick={() => {
              document
                .querySelector(".leaflet-container")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <TbOctagon strokeWidth={0.5} />
            <IoIosArrowDown />
          </div>
    </div>
    {/* <div className="getInTouch__address getInTouch__address__dark" >
    <p data-aos="fade-up-right">+374(11) 20-10-10</p>
    <p data-aos="fade-up-left">43 Abovyan Street, Yerevan, Armenia</p>
  </div> */}
  </>
  )
}
