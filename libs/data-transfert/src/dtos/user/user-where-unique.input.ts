import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PaymentListRelationFilter } from '../payment/payment-list-relation-filter.input';
import { PlaceListRelationFilter } from '../place/place-list-relation-filter.input';
import { RefreshTokenListRelationFilter } from '../refresh-token/refresh-token-list-relation-filter.input';
import { ReservationListRelationFilter } from '../reservation/reservation-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { UserImageListRelationFilter } from '../user-image/user-image-list-relation-filter.input';
import { RoleListRelationFilter } from '../role/role-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVerified?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PaymentListRelationFilter, {nullable:true})
    Payment?: PaymentListRelationFilter;

    @Field(() => PlaceListRelationFilter, {nullable:true})
    Place?: PlaceListRelationFilter;

    @Field(() => RefreshTokenListRelationFilter, {nullable:true})
    tokens?: RefreshTokenListRelationFilter;

    @Field(() => ReservationListRelationFilter, {nullable:true})
    reservations?: ReservationListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => UserImageListRelationFilter, {nullable:true})
    images?: UserImageListRelationFilter;

    @Field(() => RoleListRelationFilter, {nullable:true})
    Role?: RoleListRelationFilter;
}
