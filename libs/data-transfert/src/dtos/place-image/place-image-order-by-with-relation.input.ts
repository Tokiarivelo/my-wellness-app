import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceOrderByWithRelationInput } from '../place/place-order-by-with-relation.input';
import { PlaceImageOrderByRelevanceInput } from './place-image-order-by-relevance.input';

@InputType()
export class PlaceImageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;

    @Field(() => PlaceOrderByWithRelationInput, {nullable:true})
    place?: PlaceOrderByWithRelationInput;

    @Field(() => PlaceImageOrderByRelevanceInput, {nullable:true})
    _relevance?: PlaceImageOrderByRelevanceInput;
}
