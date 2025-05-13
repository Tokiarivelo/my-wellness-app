import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlaceImageCountAggregate } from './place-image-count-aggregate.output';
import { PlaceImageMinAggregate } from './place-image-min-aggregate.output';
import { PlaceImageMaxAggregate } from './place-image-max-aggregate.output';

@ObjectType()
export class AggregatePlaceImage {

    @Field(() => PlaceImageCountAggregate, {nullable:true})
    _count?: PlaceImageCountAggregate;

    @Field(() => PlaceImageMinAggregate, {nullable:true})
    _min?: PlaceImageMinAggregate;

    @Field(() => PlaceImageMaxAggregate, {nullable:true})
    _max?: PlaceImageMaxAggregate;
}
