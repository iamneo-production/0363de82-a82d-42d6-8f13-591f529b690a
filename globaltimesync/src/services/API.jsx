import axios from "axios";

const url = "https://localhost:8080";

const cityService = {
    getCities: async () => {
        try {
            const response = await axios.get(`${url}/cities`);
            return response.data;
        } catch (error) {
            console.error('error fetching cities', error);
            throw error;
        }
    },
    addCity: async (city) => {
        try {
            const response = await axios.post(`${url}/cities/`, city);
            return response.data;
        } catch (error) {
            console.error('error adding city', error);
            throw error;
        }
    },

    deleteCity: async (cityId) => {
        try {
            const response = await axios.delete(`${url}/cities/${cityId}`);
            return response.data;
        } catch (error) {
            console.error('error deleting city', error);
            throw error;
        }
    }
    

};

export default cityService;
