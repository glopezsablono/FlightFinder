import { Slice } from '@models/Slice';
import { SliceResponse } from '@interfaces/slice-response.interface';

export class SliceMapper {
    public static toDomain(sliceResponse: SliceResponse): Slice {
        const slice = new Slice({
            flightNumber: sliceResponse.flight_number,
            departureDateTimeUTC: sliceResponse.departure_date_time_utc,
            arrivalDateTimeUTC: sliceResponse.arrival_date_time_utc,
        });
        slice.originName = sliceResponse.origin_name;
        slice.destinationName = sliceResponse.destination_name;
        slice.duration = sliceResponse.duration;
        return slice;
    }
}
