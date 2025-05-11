import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCountAggregate } from './review-count-aggregate.output';
import { ReviewAvgAggregate } from './review-avg-aggregate.output';
import { ReviewSumAggregate } from './review-sum-aggregate.output';
import { ReviewMinAggregate } from './review-min-aggregate.output';
import { ReviewMaxAggregate } from './review-max-aggregate.output';

@ObjectType()
export class ReviewGroupBy {

    @Field(() => String, {nullable:false})
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
    createdAt!: Date | string;

    @Field(() => ReviewCountAggregate, {nullable:true})
    _count?: ReviewCountAggregate;

    @Field(() => ReviewAvgAggregate, {nullable:true})
    _avg?: ReviewAvgAggregate;

    @Field(() => ReviewSumAggregate, {nullable:true})
    _sum?: ReviewSumAggregate;

    @Field(() => ReviewMinAggregate, {nullable:true})
    _min?: ReviewMinAggregate;

    @Field(() => ReviewMaxAggregate, {nullable:true})
    _max?: ReviewMaxAggregate;
}
