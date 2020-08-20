import {Flight} from "../model/Flight";
import {SliceMapper} from "./slice.mapper";
import {FlightResponse} from "../interfaces/flight-response.interface";

export class FlightMapper {
    public static toDomain(flightResponse: FlightResponse): Flight {
        return new Flight({
            price: flightResponse.price,
            slices: flightResponse.slices.map(slice => SliceMapper.toDomain(slice))
        });
    }
}
