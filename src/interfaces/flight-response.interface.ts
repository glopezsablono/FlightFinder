import { SliceResponse } from './slice-response.interface';

export interface FlightResponse {
    price: number;
    slices: SliceResponse[];
}
