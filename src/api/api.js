import axios from 'axios';


const url = 'https://industrial-pvbr.onrender.com';

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