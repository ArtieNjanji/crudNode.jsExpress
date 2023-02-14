import React from 'react'
import {FaSignInAlt,FaSignOutAlt, FaUser } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <Link to = '/'>Asset Requesition App </Link>
        </div>
        <ul>
            <li>
                <Link to='/signin'>
                    <FaSignInAlt />Sign In
                </Link>
            </li>
            <li>
                <Link to='/signup'>
                   <FaUser />Sign Up
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header