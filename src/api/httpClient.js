import axios from 'axios' 


//Create a Http Client using Axios. Further modifications in this layer can be done later like Authorization.

const post = (url, data, config = {}) => {
    return axios.post(url, data, config)
}

const get = (url) => {
    return axios(url)
}

const put = (url, data, config = {}) => {
    return axios.put(url, data, config)
}

//Cannot contain a delete method - Cause delete is a keyword.

const del = (url) => {
    return axios.delete(url)
}

const patch = (url = '', data = '', config = {}) => {
    return axios.patch(url, data, config)
}

//Encapsulating in a JSON object

const HttpClient = {
    post,
    get,
    put,
    patch,
    delete: del
}

export {HttpClient}