import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewsInput } from './user-create-without-reviews.input';

@InputType()
export class UserCreateOrConnectWithoutReviewsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutReviewsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewsInput)
    create!: UserCreateWithoutReviewsInput;
}
