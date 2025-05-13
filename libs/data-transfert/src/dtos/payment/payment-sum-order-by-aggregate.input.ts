import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PaymentSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;
}
