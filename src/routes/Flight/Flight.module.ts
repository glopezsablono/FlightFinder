import { Module, ModuleComponent } from '@liftr/core';
import { FlightRoute } from '@routes/Flight/Flight.routes';

export const FlightModule: ModuleComponent = Module([
    {
        route: FlightRoute,
        middleware: [],
    },
]);
