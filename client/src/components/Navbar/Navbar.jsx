import React, { useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import decode from "jwt-decode";

import Avatar from '../Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'

import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import bars from "../../assets/bars-solid.svg";
import './Navbar.css'


const Navbar = ({ setIsOpen }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const User = useSelector((state) => (state.currentUserReducer))

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'})
    toast.success('Logged out successfully')
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  // eslint-disable-next-line
  }, [User?.token, dispatch])
  

  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon">
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" />
          </Link>
          <Link className="nav-item nav-btn res-nav" 
            onClick={() => setIsOpen(prev => !prev)}
          >
              Chatbot
            </Link>
            <Link to="/" className="nav-item nav-btn res-nav">
              Community
            </Link>
        </div>
        <div className="navbar-2">
          <form>
            <input type="text" placeholder="   Search..." />
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
                    to={`/Users/${User?.result?._id}`}
                    style={{
                      color: "white", textDecoration: "none"
                    }}
                  >
                    {User.result.name.charAt(0).toUpperCase()}
                  </Link>
                </Avatar>
                <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
              </>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
