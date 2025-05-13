import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutUserInput } from './review-create-without-user.input';

@InputType()
export class ReviewCreateOrConnectWithoutUserInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCreateWithoutUserInput)
    create!: ReviewCreateWithoutUserInput;
}
