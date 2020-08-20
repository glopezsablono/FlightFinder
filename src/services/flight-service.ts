import axios, {AxiosResponse} from "axios";
import { config } from "../config";
import {response} from "express";
import {FlightSearchResponse} from "../interfaces/flight-search-response.interface";
import {Flight} from "../model/Flight";

const fetchFlightsDataFromUrl: (url) => Promise<AxiosResponse<FlightSearchResponse>> = (url) => {
  return axios.get(url, {
    timeout: config.timeout,
    auth: {
      username: config.auth.username,
      password: config.auth.password,
    },
  });
};

const checkIfAlreadyExist: (flight, flights) => boolean = (flight: Flight, flights: Flight[]) => {
  return flights.some((item) => {

  });
}

export const fetchFlightsData = async () => {
  const responsesAsPromise: PromiseSettledResult<any>[] = await Promise.allSettled(
    config.services.map((serviceUrl) => fetchFlightsDataFromUrl(serviceUrl)),
  );
  const flightsData = responsesAsPromise.reduce((acc: Flight[], val: PromiseSettledResult<any>) => {
    if(val.status === "fulfilled") {

    }
    return acc;
  }, []);

};
