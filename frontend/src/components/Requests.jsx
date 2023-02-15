import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createRequest } from '../features/requestions/requesitionSlice'

const Requests = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createRequest({text}))
        setText('')

    }

  return (
    <>
    <div className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Requesition</label>
                <input 
                    type="text" 
                    name='text' 
                    id = 'text' 
                    value = {text}
                    onChange = {(e) => setText(e.target.value)}
                    />
            </div>
            <form-group>
                <button className="btn btn-block">
                    Add Request
                </button>
            </form-group>
        </form>
    </div>
    </>
  )
}

export default Requests