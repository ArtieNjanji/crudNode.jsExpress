import React from 'react'
import { useState, useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import {signin, reset} from "../features/auth/authSlice"


const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const {email, password} = formData

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
    [user, isError, isSuccess, message, dispatch, navigate]
  )
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }
    dispatch(signin(userData))
  }
  if(isLoading){
    return<Spinner />
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
        <form action="" onSubmit={onSubmit}>
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
                type="text" 
                className="form-control" 
                id ="password" 
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