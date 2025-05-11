import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceImageWhereInput } from './place-image-where.input';
import { Type } from 'class-transformer';
import { PlaceImageOrderByWithRelationInput } from './place-image-order-by-with-relation.input';
import { Prisma } from '../../.generated/prisma/client';
import { PlaceImageWhereUniqueInput } from './place-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlaceImageCountAggregateInput } from './place-image-count-aggregate.input';
import { PlaceImageMinAggregateInput } from './place-image-min-aggregate.input';
import { PlaceImageMaxAggregateInput } from './place-image-max-aggregate.input';

@ArgsType()
export class PlaceImageAggregateArgs {

    @Field(() => PlaceImageWhereInput, {nullable:true})
    @Type(() => PlaceImageWhereInput)
    where?: PlaceImageWhereInput;

    @Field(() => [PlaceImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlaceImageOrderByWithRelationInput>;

    @Field(() => PlaceImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlaceImageCountAggregateInput, {nullable:true})
    _count?: PlaceImageCountAggregateInput;

    @Field(() => PlaceImageMinAggregateInput, {nullable:true})
    _min?: PlaceImageMinAggregateInput;

    @Field(() => PlaceImageMaxAggregateInput, {nullable:true})
    _max?: PlaceImageMaxAggregateInput;
}
