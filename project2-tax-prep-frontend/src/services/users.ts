import axios from 'axios'
import base from '../baseUrl'

const baseUrl = base + '/users';

// Create new user
const createUser = (newUser : any) => {
    const request = axios.post(baseUrl, newUser)
    return request.then(response => response.data)
}

// get user info by Id
const getUserById = (userId : any) => {
    const request = axios.get(`${baseUrl}/${userId}`)
    return request.then(response => response.data)
}

// Update user
const updateUser = (user : any) => {
    const request = axios.put(baseUrl, user)
    return request.then(response => response.data)
}

// Delete user
const deleteUser = (user : any) => {
    const request = axios.delete(baseUrl, {data: user})
    return request.then(response => response.data)
}

export default { createUser, getUserById, updateUser, deleteUser }