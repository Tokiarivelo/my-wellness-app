import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { ReviewOrderByWithRelationInput } from './review-order-by-with-relation.input';
import { Prisma } from '../../.generated/prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewScalarFieldEnum } from './review-scalar-field.enum';

@ArgsType()
export class FindFirstReviewArgs {

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;

    @Field(() => [ReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewOrderByWithRelationInput>;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReviewScalarFieldEnum}`>;
}
