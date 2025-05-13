import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceWhereInput } from './place-where.input';
import { Type } from 'class-transformer';
import { PlaceOrderByWithRelationInput } from './place-order-by-with-relation.input';
import { Prisma } from '../../prisma-module';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlaceCountAggregateInput } from './place-count-aggregate.input';
import { PlaceAvgAggregateInput } from './place-avg-aggregate.input';
import { PlaceSumAggregateInput } from './place-sum-aggregate.input';
import { PlaceMinAggregateInput } from './place-min-aggregate.input';
import { PlaceMaxAggregateInput } from './place-max-aggregate.input';

@ArgsType()
export class PlaceAggregateArgs {

    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: PlaceWhereInput;

    @Field(() => [PlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlaceOrderByWithRelationInput>;

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlaceCountAggregateInput, {nullable:true})
    _count?: PlaceCountAggregateInput;

    @Field(() => PlaceAvgAggregateInput, {nullable:true})
    _avg?: PlaceAvgAggregateInput;

    @Field(() => PlaceSumAggregateInput, {nullable:true})
    _sum?: PlaceSumAggregateInput;

    @Field(() => PlaceMinAggregateInput, {nullable:true})
    _min?: PlaceMinAggregateInput;

    @Field(() => PlaceMaxAggregateInput, {nullable:true})
    _max?: PlaceMaxAggregateInput;
}
