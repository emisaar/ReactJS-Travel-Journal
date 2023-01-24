import React from 'react'
import logo from '../images/globe-icon.svg'

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="Globe" className='nav-img'/>
            <h1 className='nav-h1'>My Travel Journal</h1>
        </nav>
    )
}