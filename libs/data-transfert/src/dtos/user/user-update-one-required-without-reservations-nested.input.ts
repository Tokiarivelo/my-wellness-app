import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReservationsInput } from './user-create-without-reservations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReservationsInput } from './user-create-or-connect-without-reservations.input';
import { UserUpsertWithoutReservationsInput } from './user-upsert-without-reservations.input';
import { Prisma } from '../../prisma-module';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReservationsInput } from './user-update-to-one-with-where-without-reservations.input';

@InputType()
export class UserUpdateOneRequiredWithoutReservationsNestedInput {

    @Field(() => UserCreateWithoutReservationsInput, {nullable:true})
    @Type(() => UserCreateWithoutReservationsInput)
    create?: UserCreateWithoutReservationsInput;

    @Field(() => UserCreateOrConnectWithoutReservationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReservationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput;

    @Field(() => UserUpsertWithoutReservationsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReservationsInput)
    upsert?: UserUpsertWithoutReservationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReservationsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReservationsInput)
    update?: UserUpdateToOneWithWhereWithoutReservationsInput;
}
