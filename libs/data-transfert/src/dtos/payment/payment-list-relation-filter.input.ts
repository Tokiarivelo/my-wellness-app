import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';

@InputType()
export class PaymentListRelationFilter {

    @Field(() => PaymentWhereInput, {nullable:true})
    every?: PaymentWhereInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    some?: PaymentWhereInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    none?: PaymentWhereInput;
}
