import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const headerComponents = ['About','Rooms','Restaurant','Conference hall','Contacts']
  return (
    <header>
        <Link to='/'>Felinger Hotel</Link>
        <nav>
          <Link to='/'>Home</Link>
            {headerComponents.map((item,index) =>{
                 return <Link to={item.replace(' ', '-')} key={index}>{item}</Link>
            })}
        </nav>
        <p>+374(11) 20-10-10</p>
    </header>
  )
}
