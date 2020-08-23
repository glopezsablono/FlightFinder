import axios, { AxiosResponse } from 'axios';
import { config } from '../config';
import { FlightSearchResponse } from '@interfaces/flight-search-response.interface';
import { Flight } from '@models/Flight';
import { FlightSearchMapper } from '@mappers/flight-search.mapper';
import { some } from 'lodash';

export class FlightSearchService {
    public async fetchData(): Promise<Flight[]> {
        const responsesAsPromise: PromiseSettledResult<
            any
        >[] = await Promise.allSettled(
            config.services.map((serviceUrl) =>
                this._fetchFlightsDataFrom(serviceUrl)
            )
        );
        return responsesAsPromise.reduce(
            (
                flightsAcc: Flight[],
                responseAsPromise: PromiseSettledResult<any>
            ) => {
                // Handle promises
                if (responseAsPromise.status === 'fulfilled') {
                    // Transform to domain objects
                    const flightSearch = FlightSearchMapper.toDomain(
                        responseAsPromise.value.data
                    );
                    // Remove duplicates
                    flightSearch.flights.forEach((flight: Flight) => {
                        const isFlightIncludedAlready = some(
                            flightsAcc,
                            (tempFlight) => flight.isEqual(tempFlight)
                        );
                        if (!isFlightIncludedAlready) {
                            flightsAcc.push(flight);
                        }
                    });
                }
                return flightsAcc;
            },
            []
        );
    }

    // It's public for unit testing
    public _fetchFlightsDataFrom(
        url: string
    ): Promise<AxiosResponse<FlightSearchResponse>> {
        if (!config.auth.username || !config.auth.password) {
            throw new Error(
                `Unfortunately we can't find the flight information. Try again later.`
            );
        }
        return axios.get(url, {
            timeout: config.timeout,
            auth: {
                username: config.auth.username,
                password: config.auth.password,
            },
        });
    }
}
