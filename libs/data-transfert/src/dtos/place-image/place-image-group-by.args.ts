import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceImageWhereInput } from './place-image-where.input';
import { Type } from 'class-transformer';
import { PlaceImageOrderByWithAggregationInput } from './place-image-order-by-with-aggregation.input';
import { PlaceImageScalarFieldEnum } from './place-image-scalar-field.enum';
import { PlaceImageScalarWhereWithAggregatesInput } from './place-image-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PlaceImageCountAggregateInput } from './place-image-count-aggregate.input';
import { PlaceImageMinAggregateInput } from './place-image-min-aggregate.input';
import { PlaceImageMaxAggregateInput } from './place-image-max-aggregate.input';

@ArgsType()
export class PlaceImageGroupByArgs {

    @Field(() => PlaceImageWhereInput, {nullable:true})
    @Type(() => PlaceImageWhereInput)
    where?: PlaceImageWhereInput;

    @Field(() => [PlaceImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PlaceImageOrderByWithAggregationInput>;

    @Field(() => [PlaceImageScalarFieldEnum], {nullable:false})
    by!: Array<`${PlaceImageScalarFieldEnum}`>;

    @Field(() => PlaceImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: PlaceImageScalarWhereWithAggregatesInput;

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
