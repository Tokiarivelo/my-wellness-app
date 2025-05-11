import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RefreshTokenCountOrderByAggregateInput } from './refresh-token-count-order-by-aggregate.input';
import { RefreshTokenMaxOrderByAggregateInput } from './refresh-token-max-order-by-aggregate.input';
import { RefreshTokenMinOrderByAggregateInput } from './refresh-token-min-order-by-aggregate.input';

@InputType()
export class RefreshTokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => RefreshTokenCountOrderByAggregateInput, {nullable:true})
    _count?: RefreshTokenCountOrderByAggregateInput;

    @Field(() => RefreshTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: RefreshTokenMaxOrderByAggregateInput;

    @Field(() => RefreshTokenMinOrderByAggregateInput, {nullable:true})
    _min?: RefreshTokenMinOrderByAggregateInput;
}
