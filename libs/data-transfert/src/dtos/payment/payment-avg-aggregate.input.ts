import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PaymentAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
