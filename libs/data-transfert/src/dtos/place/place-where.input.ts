import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { PlaceImageListRelationFilter } from '../place-image/place-image-list-relation-filter.input';
import { ReservationListRelationFilter } from '../reservation/reservation-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';

@InputType()
export class PlaceWhereInput {

    @Field(() => [PlaceWhereInput], {nullable:true})
    AND?: Array<PlaceWhereInput>;

    @Field(() => [PlaceWhereInput], {nullable:true})
    OR?: Array<PlaceWhereInput>;

    @Field(() => [PlaceWhereInput], {nullable:true})
    NOT?: Array<PlaceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    providerId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    provider?: UserScalarRelationFilter;

    @Field(() => PlaceImageListRelationFilter, {nullable:true})
    images?: PlaceImageListRelationFilter;

    @Field(() => ReservationListRelationFilter, {nullable:true})
    reservations?: ReservationListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;
}
