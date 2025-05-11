import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PlaceImageScalarWhereWithAggregatesInput {

    @Field(() => [PlaceImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlaceImageScalarWhereWithAggregatesInput>;

    @Field(() => [PlaceImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlaceImageScalarWhereWithAggregatesInput>;

    @Field(() => [PlaceImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlaceImageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    placeId?: StringWithAggregatesFilter;
}
