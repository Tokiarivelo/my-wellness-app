import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PlaceScalarRelationFilter } from '../place/place-scalar-relation-filter.input';

@InputType()
export class TagWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [TagWhereInput], {nullable:true})
    AND?: Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {nullable:true})
    OR?: Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {nullable:true})
    NOT?: Array<TagWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    placeId?: StringFilter;

    @Field(() => PlaceScalarRelationFilter, {nullable:true})
    place?: PlaceScalarRelationFilter;
}
