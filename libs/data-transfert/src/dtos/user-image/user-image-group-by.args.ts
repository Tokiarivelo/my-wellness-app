import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageWhereInput } from './user-image-where.input';
import { Type } from 'class-transformer';
import { UserImageOrderByWithAggregationInput } from './user-image-order-by-with-aggregation.input';
import { UserImageScalarFieldEnum } from './user-image-scalar-field.enum';
import { UserImageScalarWhereWithAggregatesInput } from './user-image-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserImageCountAggregateInput } from './user-image-count-aggregate.input';
import { UserImageMinAggregateInput } from './user-image-min-aggregate.input';
import { UserImageMaxAggregateInput } from './user-image-max-aggregate.input';

@ArgsType()
export class UserImageGroupByArgs {

    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: UserImageWhereInput;

    @Field(() => [UserImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserImageOrderByWithAggregationInput>;

    @Field(() => [UserImageScalarFieldEnum], {nullable:false})
    by!: Array<`${UserImageScalarFieldEnum}`>;

    @Field(() => UserImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserImageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserImageCountAggregateInput, {nullable:true})
    _count?: UserImageCountAggregateInput;

    @Field(() => UserImageMinAggregateInput, {nullable:true})
    _min?: UserImageMinAggregateInput;

    @Field(() => UserImageMaxAggregateInput, {nullable:true})
    _max?: UserImageMaxAggregateInput;
}
