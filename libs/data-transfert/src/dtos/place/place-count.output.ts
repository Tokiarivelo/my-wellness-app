import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlaceCount {

    @Field(() => Int, {nullable:false})
    images?: number;

    @Field(() => Int, {nullable:false})
    reservations?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    tags?: number;
}
