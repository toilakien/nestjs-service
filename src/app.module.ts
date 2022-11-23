import { CatsController } from './cat/controllers/cats.controller';
import { Module } from '@nestjs/common';
import { CatsModule } from './cat/cat.module';
import { AuthenicationModule } from './authenication/authenication.module';

@Module({
  imports: [CatsModule,AuthenicationModule],
})
export class AppModule {}
