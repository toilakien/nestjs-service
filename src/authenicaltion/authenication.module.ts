import { administratorProviders } from './administrator.providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AdministrastorService } from './services/authenication.service';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    AdministrastorService,
    ...administratorProviders,
  ],
})
export class CatsModule {}