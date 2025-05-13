import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceImageWhereInput } from './place-image-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PlaceScalarRelationFilter } from '../place/place-scalar-relation-filter.input';

@InputType()
export class PlaceImageWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PlaceImageWhereInput], {nullable:true})
    AND?: Array<PlaceImageWhereInput>;

    @Field(() => [PlaceImageWhereInput], {nullable:true})
    OR?: Array<PlaceImageWhereInput>;

    @Field(() => [PlaceImageWhereInput], {nullable:true})
    NOT?: Array<PlaceImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    placeId?: StringFilter;

    @Field(() => PlaceScalarRelationFilter, {nullable:true})
    place?: PlaceScalarRelationFilter;
}
