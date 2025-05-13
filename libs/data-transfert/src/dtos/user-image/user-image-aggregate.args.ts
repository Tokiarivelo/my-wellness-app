import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageWhereInput } from './user-image-where.input';
import { Type } from 'class-transformer';
import { UserImageOrderByWithRelationInput } from './user-image-order-by-with-relation.input';
import { Prisma } from '../../prisma-module';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserImageCountAggregateInput } from './user-image-count-aggregate.input';
import { UserImageMinAggregateInput } from './user-image-min-aggregate.input';
import { UserImageMaxAggregateInput } from './user-image-max-aggregate.input';

@ArgsType()
export class UserImageAggregateArgs {

    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: UserImageWhereInput;

    @Field(() => [UserImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserImageOrderByWithRelationInput>;

    @Field(() => UserImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;

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
