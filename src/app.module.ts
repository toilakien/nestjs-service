import { CatsController } from './cat/controllers/cats.controller';
import { Module } from '@nestjs/common';
import { CatsModule } from './cat/cat.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
