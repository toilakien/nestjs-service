import { CatsService } from './../cats.service';
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Response } from 'express';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    try {
      if (createCatDto.name && createCatDto.breed && createCatDto.age) {
        await this.catsService.create(createCatDto);
        res.status(HttpStatus.OK).json({
          status: 'create successfully!',
        });
      } else {
        res.status(HttpStatus.BAD_REQUEST).json({
          status: 'Error',
          message: 'You must input information ',
        });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        status: 'Error',
        message: error,
      });
    }
  }

  @Get()
  findAll(@Query() query: any) {
    return this.catsService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return `This action returns a #${id} cat`;
  //   }

  //   @Put(':id')
  //   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //     return `This action updates a #${id} cat`;
  //   }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
