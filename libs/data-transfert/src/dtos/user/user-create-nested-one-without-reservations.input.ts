import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReservationsInput } from './user-create-without-reservations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReservationsInput } from './user-create-or-connect-without-reservations.input';
import { Prisma } from '../../.generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReservationsInput {

    @Field(() => UserCreateWithoutReservationsInput, {nullable:true})
    @Type(() => UserCreateWithoutReservationsInput)
    create?: UserCreateWithoutReservationsInput;

    @Field(() => UserCreateOrConnectWithoutReservationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReservationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
