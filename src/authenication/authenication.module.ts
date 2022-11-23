import { administratorProviders } from './administrator.providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AdministrastorService } from './services/authenication.service';
import { AuthenicationController } from './controllers/authenication.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthenicationController],
  providers: [
    AdministrastorService,
    ...administratorProviders,
  ],
})
export class AuthenicationModule {}