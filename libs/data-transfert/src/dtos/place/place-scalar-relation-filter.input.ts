import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereInput } from './place-where.input';

@InputType()
export class PlaceScalarRelationFilter {

    @Field(() => PlaceWhereInput, {nullable:true})
    is?: PlaceWhereInput;

    @Field(() => PlaceWhereInput, {nullable:true})
    isNot?: PlaceWhereInput;
}
