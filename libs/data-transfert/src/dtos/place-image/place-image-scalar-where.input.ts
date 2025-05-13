import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PlaceImageScalarWhereInput {

    @Field(() => [PlaceImageScalarWhereInput], {nullable:true})
    AND?: Array<PlaceImageScalarWhereInput>;

    @Field(() => [PlaceImageScalarWhereInput], {nullable:true})
    OR?: Array<PlaceImageScalarWhereInput>;

    @Field(() => [PlaceImageScalarWhereInput], {nullable:true})
    NOT?: Array<PlaceImageScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    placeId?: StringFilter;
}
