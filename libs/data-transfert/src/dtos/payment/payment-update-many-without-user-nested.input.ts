import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutUserInput } from './payment-create-without-user.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutUserInput } from './payment-create-or-connect-without-user.input';
import { PaymentUpsertWithWhereUniqueWithoutUserInput } from './payment-upsert-with-where-unique-without-user.input';
import { PaymentCreateManyUserInputEnvelope } from './payment-create-many-user-input-envelope.input';
import { Prisma } from '../../.generated/prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentUpdateWithWhereUniqueWithoutUserInput } from './payment-update-with-where-unique-without-user.input';
import { PaymentUpdateManyWithWhereWithoutUserInput } from './payment-update-many-with-where-without-user.input';
import { PaymentScalarWhereInput } from './payment-scalar-where.input';

@InputType()
export class PaymentUpdateManyWithoutUserNestedInput {

    @Field(() => [PaymentCreateWithoutUserInput], {nullable:true})
    @Type(() => PaymentCreateWithoutUserInput)
    create?: Array<PaymentCreateWithoutUserInput>;

    @Field(() => [PaymentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutUserInput>;

    @Field(() => [PaymentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PaymentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PaymentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PaymentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PaymentCreateManyUserInputEnvelope)
    createMany?: PaymentCreateManyUserInputEnvelope;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>>;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>>;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>>;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>>;

    @Field(() => [PaymentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PaymentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PaymentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PaymentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PaymentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PaymentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    @Type(() => PaymentScalarWhereInput)
    deleteMany?: Array<PaymentScalarWhereInput>;
}
