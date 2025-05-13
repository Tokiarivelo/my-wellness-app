import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReservationsInput } from './user-create-without-reservations.input';

@InputType()
export class UserCreateOrConnectWithoutReservationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutReservationsInput, {nullable:false})
    @Type(() => UserCreateWithoutReservationsInput)
    create!: UserCreateWithoutReservationsInput;
}
