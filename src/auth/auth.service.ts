import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { AuthUserDto } from './dto/auth-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: typeof User,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: AuthUserDto): Promise<User> {
    return await this.userRepository.create({
      email: createUserDto.email,
      password: await bcrypt.hash(createUserDto.password, 10),
    });
  }

  async login(login:AuthUserDto): Promise<{access_token}> {
    const {email ,password} = login;
    const user = await this.findOneByEmail(email);

    if (!user) {
      throw new BadRequestException('invalid credentials email');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('invalid credentials password');
    }

    const payload = { sub:user.id , email: user.email  };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  findOneByEmail(email: string): Promise<User> {
    return  this.userRepository.findOne<User>({ where: { email } });
}


}
