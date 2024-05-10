import axios from 'axios'

const baseUrl = 'http://localhost:8080/return-statuses'

// Create new return status
const createReturnStatus = (newReturnStatus : any) => {
    const request = axios.post(baseUrl, newReturnStatus)
    return request.then(response => response.data)
}

// Get return status by user id
const getReturnStatusByUserId = (userId : any) => {
    const request = axios.get(`${baseUrl}/user-id/${userId}`)
    return request.then(response => response.data)
}

// Update return status
const updateReturnStatus = (returnStatus : any) => {
    const request = axios.put(baseUrl, returnStatus)
    return request.then(response => response.data)
}

// Delete return status
const deleteReturnStatus = (returnStatus : any) => {
    const request = axios.delete(baseUrl, {data: returnStatus})
    return request.then(response => response.data)
}

export default { createReturnStatus, getReturnStatusByUserId, updateReturnStatus, deleteReturnStatus }