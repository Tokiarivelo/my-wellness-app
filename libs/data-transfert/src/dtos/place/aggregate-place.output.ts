import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlaceCountAggregate } from './place-count-aggregate.output';
import { PlaceAvgAggregate } from './place-avg-aggregate.output';
import { PlaceSumAggregate } from './place-sum-aggregate.output';
import { PlaceMinAggregate } from './place-min-aggregate.output';
import { PlaceMaxAggregate } from './place-max-aggregate.output';

@ObjectType()
export class AggregatePlace {

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
