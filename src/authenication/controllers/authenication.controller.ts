import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AdministrastorService } from '../services/authenication.service';
import { Response } from 'express';
import { AccountLogin, CreateAccountDto } from '../dto/create-auth.dto';
import { fn_checkcode, fn_encode } from 'src/utils/en_decodepassword';
var jwt = require('jsonwebtoken');
@Controller('authenication')
export class AuthenicationController {
  constructor(private administrastorService: AdministrastorService) {}

  @Post()
  async create(@Res() res: Response, @Body() body: CreateAccountDto) {
    const a = await this.administrastorService.getAll();
    a && a.find((e) => e.username === body.username)
      ? res.status(HttpStatus.BAD_REQUEST).json({
          status: 'fail',
          message: 'User đã tồn tại !',
        })
      : res.status(HttpStatus.OK).json({
          auth: await this.administrastorService.create({
            username: body.username,
            password: fn_encode(body.password),
          }),
          status: 'success',
        });
  }
  @Post('login')
  async login(@Res() res: Response, @Body() body: AccountLogin) {
    const a = await this.administrastorService.getAll();
    const account = a?.find((e) => e.username === body.username);
    account && fn_checkcode(body.password, account.password)
      ? res.status(HttpStatus.OK).json({
          status: 'sucess',
          token: jwt.sign({ usename: body.username }, process.env.SERCRET),
        })
      : res.status(HttpStatus.BAD_REQUEST).json({
          status: 'fail',
          message: 'Login fail !',
        });
  }
}
