import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@wellness-app/data-transfert/index';
import * as bcrypt from 'bcrypt';
import {
  User,
  UserCreateInput,
  FindManyUserArgs,
  DeleteOneUserArgs,
} from '@wellness-app/data-transfert/index';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: UserCreateInput): Promise<User> {
    const hash = await bcrypt.hash(input.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        firstName: input.firstName,
        username: input.username,
        lastName: input.lastName,
        phone: input.phone,
        password: hash,
        Role: {
          connect: { name: 'USER' },
        },
      },
    });
    return user;
  }

  async findAll(params: FindManyUserArgs): Promise<User[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    const users = await this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return users;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { Role: true },
    });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { Role: true },
    });
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  async deleteUser({ where }: DeleteOneUserArgs): Promise<User> {
    const user = await this.prisma.user.delete({
      where,
    });

    if (!user) throw new NotFoundException(`User ${where} not found`);
    return user;
  }
}
