import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
const setHeadersWithToken = () => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
};
export const submitRegistration = (d) => {
    return axios.post(
        `${apiUrl}/user/registration`,
        d.payload,
    )
};
export const submitLogin = (d) => {
    return axios.post(
        `${apiUrl}/login`,
        d.payload,
    )
};
export const checkToken = () => {
    return axios.post(
        `${apiUrl}/checkToken`,
        {},
        {headers: setHeadersWithToken()}
    )
};
export const submitWorker = (d) => {
    return axios.post(
        `${apiUrl}/addWorker`,
        d.payload,
        {headers: setHeadersWithToken()}
    )
};
export const updateWorker = (d) => {
    return axios.post(
        `${apiUrl}/updateWorker`,
        d.payload,
        {headers: setHeadersWithToken()}
    )
};
export const setWorkerToDelete = (d) => {
    return axios.post(
        `${apiUrl}/deleteWorker`,
        {id: d.payload},
        {headers: setHeadersWithToken()}
    )
};
export const getWorkers = (d) => {
    return axios.post(
        `${apiUrl}/getWorkers`,
        {data: d.payload},
        {headers: setHeadersWithToken()}
    )
};