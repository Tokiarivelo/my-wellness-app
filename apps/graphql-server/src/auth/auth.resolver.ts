import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { TokensService } from './token/tokens.service';
import {
  LoginInput,
  User,
  RegisterInput,
} from '@wellness-app/data-transfert/index';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private tokensService: TokensService
  ) {}

  @Mutation(() => String)
  async login(@Args('data') data: LoginInput) {
    const result = await this.authService.login(data);
    if (!result || !result.accessToken) {
      return null;
    }
    return result.accessToken;
  }

  @Mutation(() => User)
  async register(@Args('data') data: RegisterInput) {
    return this.authService.register(data);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async logout(@Context() { req }: any): Promise<boolean> {
    await this.tokensService.revoke(req.user.userId);
    return true;
  }
}
