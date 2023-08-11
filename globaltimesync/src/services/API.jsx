import React, { useState,useEffect } from 'react';
import axios from "axios";

function API{
    const url = "https://localhost:3001";

    const cityService = {
         getCities : async () => {
            try {
                const response = await axios.get(`${url}/cities`);
                return response.data;

            }
            catch(error){
                console.error('error fecthing cities',error);
            }
            throw error;

        }
    };

    addCity : async () => {
        try{
            const response = axios.post(`${url}/cities/:id`)
        }
    };


}