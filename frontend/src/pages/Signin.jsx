import React from 'react'
import { useState, useEffect } from 'react'
import {FaSignInAlt, FaUser, FaSignOutAlt} from 'react-icons/fa'

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const {email, password} = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="heading">
        <h1>
          <FaSignInAlt/> Sign In
        </h1>
        <p>Sign In to make a request</p>
      </div>
      <div className="form">
        <form action="">
          <div className="form-group">
            <input 
                type="email" 
                className="form-control" 
                id ="email" 
                name ="email" 
                value = {email} 
                placeholder = "you@gmail.com" 
                onChange = {onChange}/>
          </div>
          <div className="form-group">
            <input 
                type="email" 
                className="form-control" 
                id ="email" 
                name ="password" 
                value = {password} 
                placeholder = "Password" 
                onChange = {onChange}/>
          </div>
          <div className="form-group">
            <button type='submit' className = 'btn btn-block'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signin