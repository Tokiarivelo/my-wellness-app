import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutUserInput } from './review-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutUserInput } from './review-create-or-connect-without-user.input';
import { ReviewUpsertWithWhereUniqueWithoutUserInput } from './review-upsert-with-where-unique-without-user.input';
import { ReviewCreateManyUserInputEnvelope } from './review-create-many-user-input-envelope.input';
import { Prisma } from '../../prisma-module';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutUserInput } from './review-update-with-where-unique-without-user.input';
import { ReviewUpdateManyWithWhereWithoutUserInput } from './review-update-many-with-where-without-user.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserInput)
    create?: Array<ReviewCreateWithoutUserInput>;

    @Field(() => [ReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserInputEnvelope)
    createMany?: ReviewCreateManyUserInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}
