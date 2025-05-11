import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './user.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
