import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReservationCountOrderByAggregateInput } from './reservation-count-order-by-aggregate.input';
import { ReservationMaxOrderByAggregateInput } from './reservation-max-order-by-aggregate.input';
import { ReservationMinOrderByAggregateInput } from './reservation-min-order-by-aggregate.input';

@InputType()
export class ReservationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    date?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ReservationCountOrderByAggregateInput, {nullable:true})
    _count?: ReservationCountOrderByAggregateInput;

    @Field(() => ReservationMaxOrderByAggregateInput, {nullable:true})
    _max?: ReservationMaxOrderByAggregateInput;

    @Field(() => ReservationMinOrderByAggregateInput, {nullable:true})
    _min?: ReservationMinOrderByAggregateInput;
}
