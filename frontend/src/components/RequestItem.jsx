import React from 'react'
import { useDispatch } from 'react-redux'
import {MdModeEditOutline} from 'react-icons/md'
import { deleteRequest, updateRequest } from '../features/requestions/requesitionSlice'

const RequestItem = ({request}) => {
    const dispatch = useDispatch()
    
  return (
    <div className="request">
        <div>
            {new Date(request.createdAt).toLocaleString('en-US')}
        </div>
        <h2>
            {request.text}
        </h2>
        <button className='close' onClick={() => dispatch(deleteRequest(request._id))}>X</button>
        <button className='edit' onClick={() => dispatch(updateRequest(request._id))}><MdModeEditOutline/></button>
    </div>
  )
}

export default RequestItem