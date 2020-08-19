import axios from 'axios';
import { config } from "../config";

const fetchFlightsDataFromUrl = (url) => {
    return axios.get(url, {
        timeout: 1000,
        auth: {
            username: config.auth.username,
            password: config.auth.password
        }
    })
}

export const fetchFlightsData = () => {
    return Promise.allSettled(config.services.map(serviceUrl => fetchFlightsDataFromUrl(serviceUrl)))
};
