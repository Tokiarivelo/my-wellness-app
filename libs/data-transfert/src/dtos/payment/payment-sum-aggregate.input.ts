import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PaymentSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
