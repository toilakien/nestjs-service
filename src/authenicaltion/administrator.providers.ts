import { Connection } from 'mongoose';
import { AdministratorSchema } from './models/administrator.schema';

export const administratorProviders = [
  {
    provide: 'ADMINISTRATOR_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Administrator', AdministratorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
