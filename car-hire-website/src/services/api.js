import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchAvailableCars = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cars`);
        return response.data;
    } catch (error) {
        console.error('Error fetching available cars:', error);
        throw error;
    }
};

export const submitRentalRequest = async (rentalData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/rentals`, rentalData);
        return response.data;
    } catch (error) {
        console.error('Error submitting rental request:', error);
        throw error;
    }
};

export const fetchUserData = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};