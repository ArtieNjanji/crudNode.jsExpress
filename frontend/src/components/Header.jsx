import React from 'react'
import {FaSignInAlt,FaSignOutAlt, FaUser } from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <div className="header">
        <div className="logo">
            <Link to = '/'><h1>Asset Requesition App</h1> </Link>
        </div>
        <ul>
            {user ? ( <li>
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt />Sign Out
                        </button>
                    </li>) : (
                <>
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
                </>
            )}
            
        </ul>
    </div>
  )
}

export default Header