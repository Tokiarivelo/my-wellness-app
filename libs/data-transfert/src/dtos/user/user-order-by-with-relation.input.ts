import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PaymentOrderByRelationAggregateInput } from '../payment/payment-order-by-relation-aggregate.input';
import { PlaceOrderByRelationAggregateInput } from '../place/place-order-by-relation-aggregate.input';
import { RefreshTokenOrderByRelationAggregateInput } from '../refresh-token/refresh-token-order-by-relation-aggregate.input';
import { ReservationOrderByRelationAggregateInput } from '../reservation/reservation-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { UserImageOrderByRelationAggregateInput } from '../user-image/user-image-order-by-relation-aggregate.input';
import { RoleOrderByRelationAggregateInput } from '../role/role-order-by-relation-aggregate.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    lastName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PaymentOrderByRelationAggregateInput, {nullable:true})
    Payment?: PaymentOrderByRelationAggregateInput;

    @Field(() => PlaceOrderByRelationAggregateInput, {nullable:true})
    Place?: PlaceOrderByRelationAggregateInput;

    @Field(() => RefreshTokenOrderByRelationAggregateInput, {nullable:true})
    tokens?: RefreshTokenOrderByRelationAggregateInput;

    @Field(() => ReservationOrderByRelationAggregateInput, {nullable:true})
    reservations?: ReservationOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => UserImageOrderByRelationAggregateInput, {nullable:true})
    images?: UserImageOrderByRelationAggregateInput;

    @Field(() => RoleOrderByRelationAggregateInput, {nullable:true})
    Role?: RoleOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelevanceInput, {nullable:true})
    _relevance?: UserOrderByRelevanceInput;
}
