import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  UserCreateInput,
  FindManyUserArgs,
  User,
} from '@wellness-app/data-transfert/index';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async getAll(@Args() manyUserArgs: FindManyUserArgs): Promise<User[] | null> {
    return this.usersService.findAll(manyUserArgs);
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
