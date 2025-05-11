import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReviewScalarWhereInput {

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    AND?: Array<ReviewScalarWhereInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    OR?: Array<ReviewScalarWhereInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    placeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
