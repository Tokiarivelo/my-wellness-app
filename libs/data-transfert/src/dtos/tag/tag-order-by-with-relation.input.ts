import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceOrderByWithRelationInput } from '../place/place-order-by-with-relation.input';
import { TagOrderByRelevanceInput } from './tag-order-by-relevance.input';

@InputType()
export class TagOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;

    @Field(() => PlaceOrderByWithRelationInput, {nullable:true})
    place?: PlaceOrderByWithRelationInput;

    @Field(() => TagOrderByRelevanceInput, {nullable:true})
    _relevance?: TagOrderByRelevanceInput;
}
