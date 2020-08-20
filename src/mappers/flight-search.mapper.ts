import {Flight} from "../model/Flight";
import {FlightSearchResponse} from "../interfaces/flight-search-response.interface";
import {FlightMapper} from "./flight.mapper";

export class FlightSearchMapper {
    public static toDomain(response: FlightSearchResponse): Flight[] {
        return response.flights.map(flight => FlightMapper.toDomain(flight));
    }
}
