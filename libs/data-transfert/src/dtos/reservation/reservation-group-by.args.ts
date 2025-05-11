import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReservationWhereInput } from './reservation-where.input';
import { Type } from 'class-transformer';
import { ReservationOrderByWithAggregationInput } from './reservation-order-by-with-aggregation.input';
import { ReservationScalarFieldEnum } from './reservation-scalar-field.enum';
import { ReservationScalarWhereWithAggregatesInput } from './reservation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReservationCountAggregateInput } from './reservation-count-aggregate.input';
import { ReservationMinAggregateInput } from './reservation-min-aggregate.input';
import { ReservationMaxAggregateInput } from './reservation-max-aggregate.input';

@ArgsType()
export class ReservationGroupByArgs {

    @Field(() => ReservationWhereInput, {nullable:true})
    @Type(() => ReservationWhereInput)
    where?: ReservationWhereInput;

    @Field(() => [ReservationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReservationOrderByWithAggregationInput>;

    @Field(() => [ReservationScalarFieldEnum], {nullable:false})
    by!: Array<`${ReservationScalarFieldEnum}`>;

    @Field(() => ReservationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReservationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReservationCountAggregateInput, {nullable:true})
    _count?: ReservationCountAggregateInput;

    @Field(() => ReservationMinAggregateInput, {nullable:true})
    _min?: ReservationMinAggregateInput;

    @Field(() => ReservationMaxAggregateInput, {nullable:true})
    _max?: ReservationMaxAggregateInput;
}
