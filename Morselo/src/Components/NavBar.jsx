import React from 'react'
import '../navBar.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='navBar'>

      <div className='leftNavbar'>
        <div className="logo">
          <img src="/src/assets/logo.png" alt="logo" />
        </div>
      </div>
      <div className="rightNavbar">

        <ul className="navItems">

          <li className="navItem">
            <Link to='/ '>Home</Link>
          </li>
          <li className="navItem">
            <Link to='/recpies'>Recipes</Link>
          </li>
          <li className="navItem">
            <Link to='/drinks'>Drinks</Link>
          </li>
          <li className="navItem">
            <Link to='/fav-recpies'>Favs</Link>
          </li>
          <li className="navItem">
            <Link to='/about'>About</Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default NavBar
