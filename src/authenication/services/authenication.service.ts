import { administratorProviders } from './../administrator.providers';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-auth.dto';

@Injectable()
export class AdministrastorService {
  constructor(
    @Inject('ADMINISTRATOR_MODEL')
    private administratorModel: Model<any>,
  ) {}
  async getAll():Promise<any>{
    return await this.administratorModel.find({});
  }
  async create(createAccountDto: CreateAccountDto) {
    return await this.administratorModel.create(createAccountDto);
  }
}
