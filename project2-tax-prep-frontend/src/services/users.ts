import axios from 'axios'
import base from '../baseUrl'

const baseUrl = base + '/users';

// Create new user
const createUser = (newUser : any) => {
    const request = axios.post(baseUrl, newUser)
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

export default { createUser, updateUser, deleteUser }