import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PlaceImageOrderByRelationAggregateInput } from '../place-image/place-image-order-by-relation-aggregate.input';
import { ReservationOrderByRelationAggregateInput } from '../reservation/reservation-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { PlaceOrderByRelevanceInput } from './place-order-by-relevance.input';

@InputType()
export class PlaceOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    provider?: UserOrderByWithRelationInput;

    @Field(() => PlaceImageOrderByRelationAggregateInput, {nullable:true})
    images?: PlaceImageOrderByRelationAggregateInput;

    @Field(() => ReservationOrderByRelationAggregateInput, {nullable:true})
    reservations?: ReservationOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => PlaceOrderByRelevanceInput, {nullable:true})
    _relevance?: PlaceOrderByRelevanceInput;
}
