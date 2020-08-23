import {FlightSearchResponse} from '@interfaces/flight-search-response.interface';
import {FlightMapper} from '@mappers/flight.mapper';
import {FlightSearch} from '@interfaces/flight-search.interface';

export class FlightSearchMapper {
    public static toDomain(response: FlightSearchResponse): FlightSearch {
        return {
            flights: response.flights.map((flight) =>
                FlightMapper.toDomain(flight)
            ),
        };
    }
}
