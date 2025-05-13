import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserImageCountAggregate } from './user-image-count-aggregate.output';
import { UserImageMinAggregate } from './user-image-min-aggregate.output';
import { UserImageMaxAggregate } from './user-image-max-aggregate.output';

@ObjectType()
export class AggregateUserImage {

    @Field(() => UserImageCountAggregate, {nullable:true})
    _count?: UserImageCountAggregate;

    @Field(() => UserImageMinAggregate, {nullable:true})
    _min?: UserImageMinAggregate;

    @Field(() => UserImageMaxAggregate, {nullable:true})
    _max?: UserImageMaxAggregate;
}
