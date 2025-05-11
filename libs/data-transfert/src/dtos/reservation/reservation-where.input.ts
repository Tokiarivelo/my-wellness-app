import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PaymentNullableScalarRelationFilter } from '../payment/payment-nullable-scalar-relation-filter.input';
import { PlaceScalarRelationFilter } from '../place/place-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class ReservationWhereInput {

    @Field(() => [ReservationWhereInput], {nullable:true})
    AND?: Array<ReservationWhereInput>;

    @Field(() => [ReservationWhereInput], {nullable:true})
    OR?: Array<ReservationWhereInput>;

    @Field(() => [ReservationWhereInput], {nullable:true})
    NOT?: Array<ReservationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    placeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PaymentNullableScalarRelationFilter, {nullable:true})
    payment?: PaymentNullableScalarRelationFilter;

    @Field(() => PlaceScalarRelationFilter, {nullable:true})
    place?: PlaceScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
