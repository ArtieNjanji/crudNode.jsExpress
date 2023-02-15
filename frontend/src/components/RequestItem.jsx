import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteRequest } from '../features/requestions/requesitionSlice'

const RequestItem = ({request}) => {

    const dispatch = useDispatch()
  return (
    <div className="goal">
        <div>
            {new Date(request.createdAt).toLocaleString('en-US')}
        </div>
        <h2>
            {request.text}
        </h2>
        <button className='close' onClick={() => dispatch(deleteRequest(request._id))}>X</button>
        {/* <button className='edit' onClick={(dispatch(updateRequest(request._id)))}>P</button> */}
    </div>
  )
}

export default RequestItem