import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPaymentInput } from '../user/user-create-nested-one-without-payment.input';

@InputType()
export class PaymentCreateWithoutReservationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPaymentInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPaymentInput;
}
