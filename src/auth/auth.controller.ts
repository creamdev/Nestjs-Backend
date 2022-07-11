import { BadRequestException, Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from './auth.entity';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
    tests(){
        return 'profile';
    }

}
