import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserImageScalarWhereWithAggregatesInput {

    @Field(() => [UserImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserImageScalarWhereWithAggregatesInput>;

    @Field(() => [UserImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserImageScalarWhereWithAggregatesInput>;

    @Field(() => [UserImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserImageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
