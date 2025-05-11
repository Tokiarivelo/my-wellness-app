import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReservationCountAggregate } from './reservation-count-aggregate.output';
import { ReservationMinAggregate } from './reservation-min-aggregate.output';
import { ReservationMaxAggregate } from './reservation-max-aggregate.output';

@ObjectType()
export class ReservationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    placeId!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReservationCountAggregate, {nullable:true})
    _count?: ReservationCountAggregate;

    @Field(() => ReservationMinAggregate, {nullable:true})
    _min?: ReservationMinAggregate;

    @Field(() => ReservationMaxAggregate, {nullable:true})
    _max?: ReservationMaxAggregate;
}
