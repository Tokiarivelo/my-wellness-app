import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { PlaceScalarRelationFilter } from '../place/place-scalar-relation-filter.input';

@InputType()
export class PlaceImageWhereInput {

    @Field(() => [PlaceImageWhereInput], {nullable:true})
    AND?: Array<PlaceImageWhereInput>;

    @Field(() => [PlaceImageWhereInput], {nullable:true})
    OR?: Array<PlaceImageWhereInput>;

    @Field(() => [PlaceImageWhereInput], {nullable:true})
    NOT?: Array<PlaceImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    placeId?: StringFilter;

    @Field(() => PlaceScalarRelationFilter, {nullable:true})
    place?: PlaceScalarRelationFilter;
}
