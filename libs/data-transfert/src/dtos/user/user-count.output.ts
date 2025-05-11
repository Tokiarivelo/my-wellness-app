import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    Payment?: number;

    @Field(() => Int, {nullable:false})
    Place?: number;

    @Field(() => Int, {nullable:false})
    tokens?: number;

    @Field(() => Int, {nullable:false})
    reservations?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    images?: number;

    @Field(() => Int, {nullable:false})
    Role?: number;
}
