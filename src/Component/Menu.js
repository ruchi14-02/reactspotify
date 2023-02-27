import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu(){
    return(
        <nav className=' navbar navbar-expand-md navbar-dark bg-secondary '>
            <div className='container'>
                <NavLink to={'/'} className= "navbar-brand">Music player</NavLink>
                <div className='navbar-collapse collapse' id ="menu">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to ={'/home'} className = "nav-link">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu