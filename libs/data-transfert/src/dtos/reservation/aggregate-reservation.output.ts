import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReservationCountAggregate } from './reservation-count-aggregate.output';
import { ReservationMinAggregate } from './reservation-min-aggregate.output';
import { ReservationMaxAggregate } from './reservation-max-aggregate.output';

@ObjectType()
export class AggregateReservation {

    @Field(() => ReservationCountAggregate, {nullable:true})
    _count?: ReservationCountAggregate;

    @Field(() => ReservationMinAggregate, {nullable:true})
    _min?: ReservationMinAggregate;

    @Field(() => ReservationMaxAggregate, {nullable:true})
    _max?: ReservationMaxAggregate;
}
