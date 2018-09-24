import axios from 'axios';

//Create a Http Client using Axios.

const post = (url, data, config = {}) => {
    return axios.post(url, data, config)
}

const get = (url) => {
    return axios(url)
}

const put = (url, data) => {
    return axios.put(url)
}

const del = (url) => {
    return axios.delete(url)
}

const patch = (url = '', data) => {
    return axios.patch(url, data, )
}


const HttpClient = {
    post,
    get,
    put,
    patch,
    delete: del
}

export {HttpClient}