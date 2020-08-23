import { Request, Response } from 'express';
import { FlightSearchService } from '@services/FlightSearchService';
import { FligthSearchSerializer } from '@serializers/FligthSearchSerializer';
import Status from 'http-status';

const flightSearchService = new FlightSearchService();

export const FlightController = async (req: Request, res: Response, next) => {
    try {
        const flightsData = await flightSearchService.fetchData();
        res.status(200).json(FligthSearchSerializer.serialize(flightsData));
    } catch (e) {
        res.status(Status.INTERNAL_SERVER_ERROR).json({
            type: Status[`${Status.INTERNAL_SERVER_ERROR}_NAME`],
            message: e.message,
        });
    } finally {
        res.send();
    }
};
