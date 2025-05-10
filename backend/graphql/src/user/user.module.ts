import { Module } from '@nestjs/common';
import { PrismaModule } from '@my-relax-app/shared-prisma';
import { UsersService } from './users.service';
import { UsersResolver } from './user.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
