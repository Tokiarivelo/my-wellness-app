import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutPlaceInput } from './review-create-without-place.input';

@InputType()
export class ReviewCreateOrConnectWithoutPlaceInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewCreateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewCreateWithoutPlaceInput)
    create!: ReviewCreateWithoutPlaceInput;
}
