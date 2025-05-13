import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceImageCountOrderByAggregateInput } from './place-image-count-order-by-aggregate.input';
import { PlaceImageMaxOrderByAggregateInput } from './place-image-max-order-by-aggregate.input';
import { PlaceImageMinOrderByAggregateInput } from './place-image-min-order-by-aggregate.input';

@InputType()
export class PlaceImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;

    @Field(() => PlaceImageCountOrderByAggregateInput, {nullable:true})
    _count?: PlaceImageCountOrderByAggregateInput;

    @Field(() => PlaceImageMaxOrderByAggregateInput, {nullable:true})
    _max?: PlaceImageMaxOrderByAggregateInput;

    @Field(() => PlaceImageMinOrderByAggregateInput, {nullable:true})
    _min?: PlaceImageMinOrderByAggregateInput;
}
