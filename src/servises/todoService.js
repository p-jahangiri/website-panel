import axios from 'axios'

const baseApiUrl = process.env.REACT_APP_API_URL
const urlApi = `${baseApiUrl}/todos`;

export const insert = async(data) => {
    const response = await axios.post(urlApi,data);
    return response.data;
}

export const getAll = async () => {
    const response = await axios.get(urlApi)
    return response.data;
}
// export const getAll = () => {
//      axios.get(urlApi)
//     .then((result) => {return result ;})
//     .catch(error => {return error ;})
// }