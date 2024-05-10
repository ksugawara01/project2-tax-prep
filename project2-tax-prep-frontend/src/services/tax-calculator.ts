import axios from 'axios'
import base from '../baseUrl'

const baseUrl = base + '/calculate';

// Get the single filer tax amount
const getSingleFilerTax = (taxableIncome : number) => {
    const request = axios.get(`${baseUrl}/single`, {
        params: {
            taxableIncome: taxableIncome
        }
    });
    return request.then(response => response.data);
}

// Get the married filer tax amount
const getMarriedFilerTax = (taxableIncome : number) => {
    const request = axios.get(`${baseUrl}/married`, {
        params: {
            taxableIncome: taxableIncome
        }
    });
    return request.then(response => response.data);
}

export default { getSingleFilerTax, getMarriedFilerTax }