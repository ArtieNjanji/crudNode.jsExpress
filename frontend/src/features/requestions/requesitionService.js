// this file makes requests to the Rest API
import axios from 'axios'

const API_URL = '/api/requests/'


const createRequest = async(requestData, token)=>{
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }  
    }
    const response = await axios.post(API_URL, requestData, config)

    return response.data
}
//  get eacvh user's requestions 
const getRequests = async( token)=>{
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

// /**
// const updateRequest = async( requestId, token)=>{
//     const config = {
//         headers:{
//             Authorization : `Bearer ${token}`
//         }
//     }
//     const response = await axios.put(API_URL + requestId, config)

//     return response.data
// }
//  */
const deleteRequest = async( requestId, token)=>{
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + requestId, config)

    return response.data
}
const  requestService = {
    createRequest,
    getRequests,
    // updateRequest,
    deleteRequest
}

export default requestService