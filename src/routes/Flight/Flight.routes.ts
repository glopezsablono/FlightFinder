
import { Route } from '@liftr/core';
import { FlightController } from '@controllers/Flight/Flight.controller';

export const FlightRoute = Route.get('/', FlightController);
