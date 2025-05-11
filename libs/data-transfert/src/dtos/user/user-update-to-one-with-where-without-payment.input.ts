import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPaymentInput } from './user-update-without-payment.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPaymentInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => UserUpdateWithoutPaymentInput)
    data!: UserUpdateWithoutPaymentInput;
}
