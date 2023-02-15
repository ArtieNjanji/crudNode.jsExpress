import React from 'react'
import {useDispatch} from 'react-redux'
import { updateRequest } from '../features/requestions/requesitionSlice'

const EditRequest = ({request}) => {
    const dispatch = useDispatch()
    let text

    const onSubmit = (e) =>{
        e.preventDefault()

        const requestDetail = {
             text,
        }
        dispatch(updateRequest(requestDetail))
    }

  return (
    <>
        <form onSubmit={onSubmit}>
        <div className="edit-rerquest">
            <h2>Update Request</h2>
            <textarea ></textarea>
        </div>
        <button type='submit' className='btn btn-block' onClick={() => dispatch(request._id)}>update</button>
        </form>
    </>
  )
}

export default EditRequest