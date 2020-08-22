import axios, {AxiosResponse} from "axios";
import {config} from "../config";
import {FlightSearchResponse} from "../interfaces/flight-search-response.interface";
import {Flight} from "../model/Flight";
import {FlightSearchMapper} from "../mappers/flight-search.mapper";
import {some} from "lodash";

const fetchFlightsDataFrom: (url) => Promise<AxiosResponse<FlightSearchResponse>> = (url) => {
  return axios.get(url, {
    timeout: config.timeout,


    auth: {
      username: config.auth.username,
      password: config.auth.password,
    },
  });
};

export const fetchFlightsData = async () => {
  const responsesAsPromise: PromiseSettledResult<any>[] = await Promise.allSettled(
      config.services.map((serviceUrl) => fetchFlightsDataFrom(serviceUrl)),
  );
  return responsesAsPromise.reduce((acc: Flight[], val: PromiseSettledResult<any>) => {
    if (val.status === "fulfilled") {
      const flightInfo = FlightSearchMapper.toDomain(val.value.data);
      flightInfo.flights.forEach(f => {
        const isFlightIncludedAlready = some(acc, (fl => {
          return f.isEqual(fl);
        }));
        if (!isFlightIncludedAlready) {
          acc.push(f);
        }
      });
    }
    return acc;
  }, []);

};
