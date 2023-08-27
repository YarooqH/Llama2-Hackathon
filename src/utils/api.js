import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
const instance = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchGet = async (endpoint) => {
    try {
        const response = await instance.get(`/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const fetchPost = async (endpoint, body) => {
    try {
        const response = await instance.post(`/${endpoint}`, body);
        return response.data;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

