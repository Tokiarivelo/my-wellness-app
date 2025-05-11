import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceImageWhereInput } from './place-image-where.input';

@InputType()
export class PlaceImageListRelationFilter {

    @Field(() => PlaceImageWhereInput, {nullable:true})
    every?: PlaceImageWhereInput;

    @Field(() => PlaceImageWhereInput, {nullable:true})
    some?: PlaceImageWhereInput;

    @Field(() => PlaceImageWhereInput, {nullable:true})
    none?: PlaceImageWhereInput;
}
