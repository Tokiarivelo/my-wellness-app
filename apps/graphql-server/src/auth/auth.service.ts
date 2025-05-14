import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../user/users.service';
import { LoginInput, RegisterInput } from '@wellness-app/data-transfert/index';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password: _, ...rest } = user;
      return rest;
    }
    return null;
  }

  async login(dto: LoginInput) {
    const user = await this.validateUser(dto.email, dto.password);
    if (!user) {
      return null;
    }
    const payload = {
      email: user.email,
      username: user.username,
      sub: user.id,
      roles: user.Role,
    };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async register(dto: RegisterInput) {
    const hash = await bcrypt.hash(dto.password, 10);
    return this.usersService.create({ ...dto, password: hash });
  }
}
