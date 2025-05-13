import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereInput } from './place-where.input';

@InputType()
export class PlaceListRelationFilter {

    @Field(() => PlaceWhereInput, {nullable:true})
    every?: PlaceWhereInput;

    @Field(() => PlaceWhereInput, {nullable:true})
    some?: PlaceWhereInput;

    @Field(() => PlaceWhereInput, {nullable:true})
    none?: PlaceWhereInput;
}
