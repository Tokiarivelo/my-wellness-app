import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceCountOrderByAggregateInput } from './place-count-order-by-aggregate.input';
import { PlaceAvgOrderByAggregateInput } from './place-avg-order-by-aggregate.input';
import { PlaceMaxOrderByAggregateInput } from './place-max-order-by-aggregate.input';
import { PlaceMinOrderByAggregateInput } from './place-min-order-by-aggregate.input';
import { PlaceSumOrderByAggregateInput } from './place-sum-order-by-aggregate.input';

@InputType()
export class PlaceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    category?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    providerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PlaceCountOrderByAggregateInput, {nullable:true})
    _count?: PlaceCountOrderByAggregateInput;

    @Field(() => PlaceAvgOrderByAggregateInput, {nullable:true})
    _avg?: PlaceAvgOrderByAggregateInput;

    @Field(() => PlaceMaxOrderByAggregateInput, {nullable:true})
    _max?: PlaceMaxOrderByAggregateInput;

    @Field(() => PlaceMinOrderByAggregateInput, {nullable:true})
    _min?: PlaceMinOrderByAggregateInput;

    @Field(() => PlaceSumOrderByAggregateInput, {nullable:true})
    _sum?: PlaceSumOrderByAggregateInput;
}
