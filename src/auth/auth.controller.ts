import {  Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,private jwtService:JwtService) {}

  @Post('signup')
  async create(@Body() createUserDto: AuthUserDto): Promise<User> {
    return await this.authService.create(createUserDto);
  }


  @Post('login')
  async login(@Body() loginUserDto : AuthUserDto): Promise<{access_token}> {
    return await this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getHello(@Request() req: any) {
    console.log(req.user);
  }

}
