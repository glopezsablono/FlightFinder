import { Flight } from '@models/Flight';
import { SliceMapper } from '@mappers/slice.mapper';
import { FlightResponse } from '@interfaces/flight-response.interface';

export class FlightMapper {
    public static toDomain(flightResponse: FlightResponse): Flight {
        const flight = new Flight({
            price: flightResponse.price,
            slices: flightResponse.slices.map((slice) =>
                SliceMapper.toDomain(slice)
            ),
        });
        const id = flight.slices.reduce((acc, val) => {
            return acc.concat(
                val.flightNumber,
                val.departureDateTimeUTC,
                val.arrivalDateTimeUTC
            );
        }, '');
        flight.setId(id);
        return flight;
    }
}
