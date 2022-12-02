import { Module } from '@nestjs/common';
import { AuthenicationModule } from './authenication/authenication.module';

@Module({
  imports: [AuthenicationModule],
})
export class AppModule {}
