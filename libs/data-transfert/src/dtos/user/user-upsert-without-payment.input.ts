import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPaymentInput } from './user-update-without-payment.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPaymentInput } from './user-create-without-payment.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPaymentInput {

    @Field(() => UserUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => UserUpdateWithoutPaymentInput)
    update!: UserUpdateWithoutPaymentInput;

    @Field(() => UserCreateWithoutPaymentInput, {nullable:false})
    @Type(() => UserCreateWithoutPaymentInput)
    create!: UserCreateWithoutPaymentInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
