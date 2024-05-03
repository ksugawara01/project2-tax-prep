import axios from 'axios'

const baseUrl = 'http://localhost:8080/financial-information'

// Create new financial information
const createFinancialInformation = (newFinancialInformation : any) => {
    const request = axios.post(baseUrl, newFinancialInformation)
    return request.then(response => response.data)
}

// Get financial information by user id
const getFinancialInformationByUserId = (userId : any) => {
    const request = axios.get(`${baseUrl}/user-id/${userId}`)
    return request.then(response => [response.data, response.status])
}

// Update financial information
const updateFinancialInformation = (financialInformation : any) => {
    const request = axios.put(baseUrl, financialInformation)
    return request.then(response => response.data)
}

// Delete financial information
const deleteFinancialInformation = (financialInformation : any) => {
    const request = axios.delete(baseUrl, {data: financialInformation})
    return request.then(response => response.data)
}

export default { createFinancialInformation, getFinancialInformationByUserId, updateFinancialInformation, deleteFinancialInformation }