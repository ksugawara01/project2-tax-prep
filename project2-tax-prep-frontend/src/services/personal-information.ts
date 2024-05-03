import axios from 'axios'

const baseUrl = 'http://localhost:8080/personal-information'

// Create new personal information
const createPersonalInformation = (newPersonalInformation : any) => {
    const request = axios.post(baseUrl, newPersonalInformation)
    return request.then(response => response.data)
}

// Get personal information by user id
const getPersonalInformationByUserId = (userId : any) => {
    const request = axios.get(`${baseUrl}/user-id/${userId}`)
    return request.then(response => [response.data, response.status])
}

// Update personal information
const updatePersonalInformation = (personalInformation : any) => {
    const request = axios.put(baseUrl, personalInformation)
    return request.then(response => response.data)
}

// Delete personal information
const deletePersonalInformation = (personalInformation : any) => {
    const request = axios.delete(baseUrl, {data: personalInformation})
    return request.then(response => response.data)
}

export default { createPersonalInformation, getPersonalInformationByUserId, updatePersonalInformation, deletePersonalInformation }