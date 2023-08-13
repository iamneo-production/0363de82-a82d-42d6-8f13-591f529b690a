import axios from "axios";

const url = "https://ide-cecdcfabfcfbbebebbccccebcfdeeedfbacfe.premiumproject.examly.io/proxy/8080";

const cityService = {
    getCities: async () => {
        try {
            const response = await axios.get(`${url}/cities`);
            console.log(response.data);
            console.log(response);
            return response.data;

        } catch (error) {
            console.error('error fetching cities', error);
            throw error;
        }
    },
    addCity: async (city) => {
        try {
            const response = await axios.post(`${url}/cities/`, city);
            console.log(response.data,"city service add city method");
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
