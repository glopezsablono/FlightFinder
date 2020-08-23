import {Request, Response} from 'express';
import {FlightSearchService} from '@services/FlightSearchService';
import {FligthSearchSerializer} from '@serializers/FligthSearchSerializer';

const flightSearchService = new FlightSearchService();

export const FlightController = async (req: Request, res: Response) => {
    const flightsData = await flightSearchService.fetchData();
    res.status(200).json(FligthSearchSerializer.serialize(flightsData)).send();
};
