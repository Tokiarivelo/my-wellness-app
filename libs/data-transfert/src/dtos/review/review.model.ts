import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Place } from '../place/place.model';
import { User } from '../user/user.model';

@ObjectType()
export class Review {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    placeId!: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Place, {nullable:false})
    place?: Place;

    @Field(() => User, {nullable:false})
    user?: User;
}
