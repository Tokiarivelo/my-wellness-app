import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutUserInput } from './review-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutUserInput } from './review-create-or-connect-without-user.input';
import { ReviewCreateManyUserInputEnvelope } from './review-create-many-user-input-envelope.input';
import { Prisma } from '../../prisma-module';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedManyWithoutUserInput {

    @Field(() => [ReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserInput)
    create?: Array<ReviewCreateWithoutUserInput>;

    @Field(() => [ReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;

    @Field(() => ReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserInputEnvelope)
    createMany?: ReviewCreateManyUserInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}
