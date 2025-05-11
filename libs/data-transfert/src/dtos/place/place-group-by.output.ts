import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PlaceCountAggregate } from './place-count-aggregate.output';
import { PlaceAvgAggregate } from './place-avg-aggregate.output';
import { PlaceSumAggregate } from './place-sum-aggregate.output';
import { PlaceMinAggregate } from './place-min-aggregate.output';
import { PlaceMaxAggregate } from './place-max-aggregate.output';

@ObjectType()
export class PlaceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceCountAggregate, {nullable:true})
    _count?: PlaceCountAggregate;

    @Field(() => PlaceAvgAggregate, {nullable:true})
    _avg?: PlaceAvgAggregate;

    @Field(() => PlaceSumAggregate, {nullable:true})
    _sum?: PlaceSumAggregate;

    @Field(() => PlaceMinAggregate, {nullable:true})
    _min?: PlaceMinAggregate;

    @Field(() => PlaceMaxAggregate, {nullable:true})
    _max?: PlaceMaxAggregate;
}
