import {Request, Response} from "express";
import {fetchFlightsData} from "../../services/flight-service"
import {FligthSearchSerializer} from "../../serializers/FligthSearchSerializer";

export const FlightController = async (
    req: Request,
    res: Response,
) => {
    const flightsData = await fetchFlightsData();
    res.status(200).json(FligthSearchSerializer.serialize(flightsData)).send();
};
