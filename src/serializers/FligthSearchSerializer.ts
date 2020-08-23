import { FlightSearchResponse } from '@interfaces/flight-search-response.interface';
import { Flight } from '@models/Flight';

export class FligthSearchSerializer {
    public static serialize(flights: Flight[]): FlightSearchResponse {
        return {
            flights: flights.map((flight) => {
                return {
                    price: flight.price,
                    slices: flight.slices.map((slice) => {
                        return {
                            origin_name: slice.originName,
                            destination_name: slice.destinationName,
                            duration: slice.duration,
                            flight_number: slice.flightNumber,
                            departure_date_time_utc: slice.departureDateTimeUTC,
                            arrival_date_time_utc: slice.arrivalDateTimeUTC,
                        };
                    }),
                };
            }),
        };
    }
}
