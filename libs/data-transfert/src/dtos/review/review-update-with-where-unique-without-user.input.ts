import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutUserInput } from './review-update-without-user.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutUserInput)
    data!: ReviewUpdateWithoutUserInput;
}
