import axios from 'axios';


const url = 'http://127.0.0.1:8000';

export const getProcesses = async () => {
    return await axios.get(`${url}/`);
}

export const createProcess = async (data) => {
    return await axios.post(`${url}/createProcess`, data);
}