import {AppRouter} from "@liftr/core";
import {FlightModule} from "@routes/Flight/Flight.module";

export const routes: AppRouter[] = [
  {
    path: "/Flights",
    module: FlightModule,
    middleware: [],
  },
];
