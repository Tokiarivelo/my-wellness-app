import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReservationsInput } from './user-update-without-reservations.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReservationsInput } from './user-create-without-reservations.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReservationsInput {

    @Field(() => UserUpdateWithoutReservationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReservationsInput)
    update!: UserUpdateWithoutReservationsInput;

    @Field(() => UserCreateWithoutReservationsInput, {nullable:false})
    @Type(() => UserCreateWithoutReservationsInput)
    create!: UserCreateWithoutReservationsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
