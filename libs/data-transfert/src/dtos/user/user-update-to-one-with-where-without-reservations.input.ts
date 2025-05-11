import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReservationsInput } from './user-update-without-reservations.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReservationsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReservationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReservationsInput)
    data!: UserUpdateWithoutReservationsInput;
}
