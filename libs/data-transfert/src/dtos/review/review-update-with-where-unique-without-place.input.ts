import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutPlaceInput } from './review-update-without-place.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutPlaceInput)
    data!: ReviewUpdateWithoutPlaceInput;
}
