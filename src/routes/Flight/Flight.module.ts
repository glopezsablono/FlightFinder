import { Module, ModuleComponent } from "@liftr/core";
import { FlightRoute } from "./Flight.routes";

export const FlightModule: ModuleComponent = Module([
  {
    route: FlightRoute,
    middleware: [],
  },
]);
