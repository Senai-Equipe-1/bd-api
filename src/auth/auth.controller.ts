import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import express, { Request, Response } from "express";


@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }

  
  
  @Get('code/:code')
  async getUserDataFromGoogle(@Param('code') code:string, @Res() res:Response){

    const result = await this.authService.getUserDataFromGoogle(code);
    
    

    const user = new UserEntity();
    user.email = result ['email'];
    user.firstName = result ['given_name']; 
    user.lastName =  result ['family_name'];
    user.profilePictureUrl = result ['picture'];
    const token =  await this.authService.singIn(user);

    res.send({token: token});




  }

}
