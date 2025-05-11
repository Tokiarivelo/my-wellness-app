import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PaymentCountOrderByAggregateInput } from './payment-count-order-by-aggregate.input';
import { PaymentAvgOrderByAggregateInput } from './payment-avg-order-by-aggregate.input';
import { PaymentMaxOrderByAggregateInput } from './payment-max-order-by-aggregate.input';
import { PaymentMinOrderByAggregateInput } from './payment-min-order-by-aggregate.input';
import { PaymentSumOrderByAggregateInput } from './payment-sum-order-by-aggregate.input';

@InputType()
export class PaymentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reservationId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    method?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => PaymentCountOrderByAggregateInput, {nullable:true})
    _count?: PaymentCountOrderByAggregateInput;

    @Field(() => PaymentAvgOrderByAggregateInput, {nullable:true})
    _avg?: PaymentAvgOrderByAggregateInput;

    @Field(() => PaymentMaxOrderByAggregateInput, {nullable:true})
    _max?: PaymentMaxOrderByAggregateInput;

    @Field(() => PaymentMinOrderByAggregateInput, {nullable:true})
    _min?: PaymentMinOrderByAggregateInput;

    @Field(() => PaymentSumOrderByAggregateInput, {nullable:true})
    _sum?: PaymentSumOrderByAggregateInput;
}
