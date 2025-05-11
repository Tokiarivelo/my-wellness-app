import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PaymentOrderByWithRelationInput } from '../payment/payment-order-by-with-relation.input';
import { PlaceOrderByWithRelationInput } from '../place/place-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ReservationOrderByRelevanceInput } from './reservation-order-by-relevance.input';

@InputType()
export class ReservationOrderByWithRelationInput {

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

    @Field(() => PaymentOrderByWithRelationInput, {nullable:true})
    payment?: PaymentOrderByWithRelationInput;

    @Field(() => PlaceOrderByWithRelationInput, {nullable:true})
    place?: PlaceOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ReservationOrderByRelevanceInput, {nullable:true})
    _relevance?: ReservationOrderByRelevanceInput;
}
