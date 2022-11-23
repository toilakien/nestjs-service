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
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Response } from 'express';
import { UpdateCatDto } from '../dto/update-cat.dto';
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
  async findAll(@Query() query: any, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      status: ' get success!',
      cats: await this.catsService.findAll(),
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      status: 'Delete successfully !',
      cats: await this.catsService.delete(id),
    });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
