import React from 'react'
import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)


  return (
    <>
    <div className="heading">
      <h1>
        Dashboard
      </h1>
    </div>
  </>
  )
}

export default Dashboard