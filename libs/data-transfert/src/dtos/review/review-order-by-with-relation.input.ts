import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlaceOrderByWithRelationInput } from '../place/place-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ReviewOrderByRelevanceInput } from './review-order-by-relevance.input';

@InputType()
export class ReviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    comment?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => PlaceOrderByWithRelationInput, {nullable:true})
    place?: PlaceOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ReviewOrderByRelevanceInput, {nullable:true})
    _relevance?: ReviewOrderByRelevanceInput;
}
