import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReservationWhereInput } from './reservation-where.input';
import { Type } from 'class-transformer';
import { ReservationOrderByWithRelationInput } from './reservation-order-by-with-relation.input';
import { Prisma } from '../../prisma-module';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReservationCountAggregateInput } from './reservation-count-aggregate.input';
import { ReservationMinAggregateInput } from './reservation-min-aggregate.input';
import { ReservationMaxAggregateInput } from './reservation-max-aggregate.input';

@ArgsType()
export class ReservationAggregateArgs {

    @Field(() => ReservationWhereInput, {nullable:true})
    @Type(() => ReservationWhereInput)
    where?: ReservationWhereInput;

    @Field(() => [ReservationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReservationOrderByWithRelationInput>;

    @Field(() => ReservationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;

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
