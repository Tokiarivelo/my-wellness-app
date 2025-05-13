import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReservationScalarWhereInput {

    @Field(() => [ReservationScalarWhereInput], {nullable:true})
    AND?: Array<ReservationScalarWhereInput>;

    @Field(() => [ReservationScalarWhereInput], {nullable:true})
    OR?: Array<ReservationScalarWhereInput>;

    @Field(() => [ReservationScalarWhereInput], {nullable:true})
    NOT?: Array<ReservationScalarWhereInput>;

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
}
