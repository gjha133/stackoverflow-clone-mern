import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import './Navbar.css'


const Navbar = () => {

  const User = null

  return (
    <nav className="main-nav">
      <div className="navbar">
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
          {
            User === null ? (
              <Link to={'/Auth'} className='nav-item nav-links'>
                Log In
              </Link>
            ) : (
              <>
                <Avatar
                  backgroundColor="#009dff"
                  px="10px"
                  py="7px"
                  borderRadius="50%"
                  color="white"
                >
                  <Link
                    to={'/User'}
                    style={{ 
                      color: "white", textDecoration: "none" 
                    }}
                  >
                    G
                  </Link>
                </Avatar>
                <button className='nav-item nav-links'>Log Out</button>
              </>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar