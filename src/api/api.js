import axios from 'axios';


const url = 'http://127.0.0.1:8000';

export const getProcesses = async () => {
    return await axios.get(`${url}/`);
}

export const createProcess = async (data) => {
    return await axios.post(`${url}/createProcess`, data);
}

export const createFactors = async (data) => {
    return await axios.post(`${url}/createFactor`, data);
}

export const createSuplements = async (data) => {
    return await axios.post(`${url}/createSuplement`, data);
}