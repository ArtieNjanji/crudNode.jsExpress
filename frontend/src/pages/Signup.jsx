import React from 'react'
import { useState, useEffect } from 'react'
import {FaSignInAlt,FaSignOutAlt, FaUser } from 'react-icons/fa'


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    department: '',
    position: '',
  })

  const {name, email, password, cpassword, department, position} = formData

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
          <FaUser/> Sign Up
        </h1>
        <p>Create Account to make asset requestion online 🤓</p>
      </div>
      <div className="form">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id ="name" 
              name ="name" 
              value = {name} 
              placeholder = "Name Surname" 
              onChange = {onChange}/>
          </div>
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
              type="passwword" 
              className="form-control" 
              id ="password" 
              name ="password" 
              value = {password} 
              placeholder = "Password" 
              onChange = {onChange}/>
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id ="name" 
              name ="cpassword" 
              value = {cpassword} 
              placeholder = "Confirm Password" 
              onChange = {onChange}/>
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id ="department" 
              name ="department" 
              value = {department} 
              placeholder = "Your Department" 
              onChange = {onChange}/>
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id ="position" 
              name ="position" 
              value = {position} 
              placeholder = "Your Post" 
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

export default Signup