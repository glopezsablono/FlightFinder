import { AppRouter } from '@liftr/core';
import { FlightModule } from '@routes/Flight/Flight.module';
import { LiftrModule } from './liftr.module';

export const routes: AppRouter[] = [

  {
    path: '/Flight',
    module: FlightModule,
    middleware: [],
  },  {
    path: '/',
    module: LiftrModule,
    middleware: [],
  },
];
