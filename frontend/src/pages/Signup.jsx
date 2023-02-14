import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {FaUser } from 'react-icons/fa'
import Spinner from '../components/Spinner'
import {signup, reset} from "../features/auth/authSlice"

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

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth)


  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())
    
    }, 
    [user, isError, isSuccess, message, navigate, dispatch]
  )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== cpassword){
      toast.error('Passwords does match')
    }
    else{
      const userData = {
        name,
        email,
        password,
        department,
        position
      }

      dispatch(signup(userData))
    }
  }
  if(isLoading){
    return <Spinner/>
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