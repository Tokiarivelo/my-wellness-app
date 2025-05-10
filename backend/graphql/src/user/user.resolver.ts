import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserCreateInput, FindManyUserArgs } from '@my-relax-app/shared-dtos';
import { UsersService } from './users.service';
import { User } from '@my-relax-app/shared-dtos';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async getAll(
    @Args('usersArgs') mayUserArgs: FindManyUserArgs
  ): Promise<User[] | null> {
    return this.usersService.findAll(mayUserArgs);
  }

  @Query(() => User, { name: 'user' })
  async getOne(@Args('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  async create(@Args('input') input: UserCreateInput): Promise<User> {
    return this.usersService.create(input);
  }
}
