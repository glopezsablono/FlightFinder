// @ts-nocheck
import * as sinon from 'sinon';
import { expect } from 'chai';
import { FlightSearchService } from './FlightSearchService';

describe('src/services/FlightSearchService.ts', () => {
    let sandbox: sinon.SinonSandbox;
    const flightSearchService = new FlightSearchService();
    beforeEach(() => {
        sandbox = sinon.createSandbox();
        sinon.stub(flightSearchService, '_fetchFlightsDataFrom').callsFake(() =>
            Promise.resolve({
                data: {
                    flights: [
                        {
                            price: 500,
                            slices: [
                                {
                                    origin_name: 'Berlin',
                                    destination_name: 'Frankfurt',
                                    duration: 1,
                                    flight_number: 123,
                                    departure_date_time_utc:
                                        '2020-08-23T16:03:36.966Z',
                                    arrival_date_time_utc:
                                        '2020-08-23T17:03:36.966Z',
                                },
                                {
                                    origin_name: 'Frankfurt',
                                    destination_name: 'Berlin',
                                    duration: 1,
                                    flight_number: 456,
                                    departure_date_time_utc:
                                        '2020-08-24T16:03:36.966Z',
                                    arrival_date_time_utc:
                                        '2020-08-24T17:03:36.966Z',
                                },
                            ],
                        },
                        {
                            price: 500,
                            slices: [
                                {
                                    origin_name: 'Berlin',
                                    destination_name: 'Frankfurt',
                                    duration: 1,
                                    flight_number: 123,
                                    departure_date_time_utc:
                                        '2020-08-23T16:03:36.966Z',
                                    arrival_date_time_utc:
                                        '2020-08-23T17:03:36.966Z',
                                },
                                {
                                    origin_name: 'Frankfurt',
                                    destination_name: 'Berlin',
                                    duration: 1,
                                    flight_number: 456,
                                    departure_date_time_utc:
                                        '2020-08-24T16:03:36.966Z',
                                    arrival_date_time_utc:
                                        '2020-08-24T17:03:36.966Z',
                                },
                            ],
                        },
                        {
                            price: 500,
                            slices: [
                                {
                                    origin_name: 'Berlin',
                                    destination_name: 'Frankfurt',
                                    duration: 1,
                                    flight_number: 123,
                                    departure_date_time_utc:
                                        '2020-08-23T16:03:36.966Z',
                                    arrival_date_time_utc:
                                        '2020-08-23T17:03:36.966Z',
                                },
                                {
                                    origin_name: 'Frankfurt',
                                    destination_name: 'Berlin',
                                    duration: 1,
                                    flight_number: 456,
                                    departure_date_time_utc:
                                        '2020-08-24T16:03:36.966Z',
                                    arrival_date_time_utc:
                                        '2020-08-24T17:03:36.966Z',
                                },
                                {
                                    origin_name: 'Berlin',
                                    destination_name: 'London',
                                    duration: 1,
                                    flight_number: 456,
                                    departure_date_time_utc:
                                        '2020-08-25T16:03:36.966Z',
                                    arrival_date_time_utc:
                                        '2020-08-25T17:03:36.966Z',
                                },
                            ],
                        },
                    ],
                },
            })
        );
    });

    it('should remove the duplicate flight', () => {
        return flightSearchService.fetchData().then((flights) => {
            expect(flights).to.be.an('array').of.length(2);
            expect(flights[0].slices).to.be.an('array').of.length(2);
            expect(flights[1].slices).to.be.an('array').of.length(3);
        });
    });
});
