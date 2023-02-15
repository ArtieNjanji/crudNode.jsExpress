import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {MdModeEditOutline} from 'react-icons/md'
import { deleteRequest } from '../features/requestions/requesitionSlice'

const RequestItem = ({request}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onUpdateRequest = () => {
      // dispatch(updateRequest(request._id))
      navigate('/editrequest')

    }
    
  return (
    <div className="request">
        <div>
            {new Date(request.createdAt).toLocaleString('en-US')}
        </div>
        <h2>
            {request.text}
        </h2>
        <button className='close' onClick={() => dispatch(deleteRequest(request._id))}>X</button>
        <button className='edit' onClick={onUpdateRequest}><MdModeEditOutline/></button>
    </div>
  )
}

export default RequestItem