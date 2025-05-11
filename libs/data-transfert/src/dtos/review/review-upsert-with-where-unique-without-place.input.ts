import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutPlaceInput } from './review-update-without-place.input';
import { ReviewCreateWithoutPlaceInput } from './review-create-without-place.input';

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutPlaceInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutPlaceInput)
    update!: ReviewUpdateWithoutPlaceInput;

    @Field(() => ReviewCreateWithoutPlaceInput, {nullable:false})
    @Type(() => ReviewCreateWithoutPlaceInput)
    create!: ReviewCreateWithoutPlaceInput;
}
