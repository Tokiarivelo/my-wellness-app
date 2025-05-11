import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutPlaceInput } from './review-create-without-place.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutPlaceInput } from './review-create-or-connect-without-place.input';
import { ReviewUpsertWithWhereUniqueWithoutPlaceInput } from './review-upsert-with-where-unique-without-place.input';
import { ReviewCreateManyPlaceInputEnvelope } from './review-create-many-place-input-envelope.input';
import { Prisma } from '../../.generated/prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutPlaceInput } from './review-update-with-where-unique-without-place.input';
import { ReviewUpdateManyWithWhereWithoutPlaceInput } from './review-update-many-with-where-without-place.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUncheckedUpdateManyWithoutPlaceNestedInput {

    @Field(() => [ReviewCreateWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCreateWithoutPlaceInput)
    create?: Array<ReviewCreateWithoutPlaceInput>;

    @Field(() => [ReviewCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutPlaceInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutPlaceInput>;

    @Field(() => ReviewCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyPlaceInputEnvelope)
    createMany?: ReviewCreateManyPlaceInputEnvelope;

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

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutPlaceInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutPlaceInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}
