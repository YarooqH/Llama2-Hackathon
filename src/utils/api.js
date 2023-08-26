import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL; // Use the appropriate environment variable name

const instance = axios.create({
    baseURL: API_BASE_URL,
    // You can set headers or other configurations here
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

// Function to make POST requests
export const fetchPost = async (endpoint, body) => {
    try {
        const response = await instance.post(`/${endpoint}`, body);
        return response.data;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

// Other API-related functions can be added here
