
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import * as _ from "lodash";

export const FlightController = (req: Request, res: Response, next: NextFunction) => {
    return Promise.allSettled([
        axios.get("https://discovery-stub.comtravo.com/source1", {
            timeout: 1000,
            auth: {
                username: 'ct_interviewee',
                password: 'supersecret'
            }
        }),
        axios.get("https://discovery-stub.comtravo.com/source2", {
            timeout: 1000,
            auth: {
                username: 'ct_interviewee',
                password: 'supersecret'
            }
        }),
    ])
        .then(values => {
            const flightResponse = values.reduce((acc, val: PromiseSettledResult<any>) => {
                if(val.status === "fulfilled") {
                    console.log(val.value.data.flights);
                    acc.push(val.value.data.flights)
                }
                return acc;
            }, []);
            const uniqueFlights = _.uniqWith(flightResponse, (fligthA, fligthB) => {
                return fligthA.flight_number === fligthB.flight_number &&
                    fligthA.departure_date_time_utc === fligthB.departure_date_time_utc &&
                    fligthA.arrival_date_time_utc === fligthB.arrival_date_time_utc
            })
            res.status(200).json(uniqueFlights)
        })
        .catch(e => {
            console.log(e);
            res.status(400).json({
                error: "Server timeout"
            })
        })
        .finally(() => res.send())
};
