import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import Spinner from '../components/Spinner'
import Requests from '../components/Requests'
import { getRequests, reset } from '../features/requestions/requesitionSlice'
import RequestItem from '../components/RequestItem'


const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {requests, isLoading, isError, message} = useSelector((state) => 
    state.requests)
  

  useEffect(() => {
    if(isError){
      console.log(message)
    }
    if(!user){
      navigate('/signin')
    }
    dispatch(getRequests())

    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
    <div className="heading">
      <h1>
        Welcome {user && user.name}
      </h1>
    </div>
    <Requests/>
    <div className="content">
      {
        requests.length > 0 ? (
          <div className="goals">
            {requests.map((request) =>(
              <RequestItem key={request.id} request = {request}/>
            ))}
          </div>
        ) : ( <h3> You have not requested anything yet</h3> )
      }
    </div>
  </>
  )
}

export default Dashboard
