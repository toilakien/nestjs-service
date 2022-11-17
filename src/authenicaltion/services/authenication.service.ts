import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AdministrastorService {
  constructor(
    @Inject('ADMINISTRATOR_MODEL')
    private administratorModel: Model<any>,
  ) {}
}
