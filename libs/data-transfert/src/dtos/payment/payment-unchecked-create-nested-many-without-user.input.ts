import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutUserInput } from './payment-create-without-user.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutUserInput } from './payment-create-or-connect-without-user.input';
import { PaymentCreateManyUserInputEnvelope } from './payment-create-many-user-input-envelope.input';
import { Prisma } from '../../.generated/prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@InputType()
export class PaymentUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PaymentCreateWithoutUserInput], {nullable:true})
    @Type(() => PaymentCreateWithoutUserInput)
    create?: Array<PaymentCreateWithoutUserInput>;

    @Field(() => [PaymentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PaymentCreateOrConnectWithoutUserInput>;

    @Field(() => PaymentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PaymentCreateManyUserInputEnvelope)
    createMany?: PaymentCreateManyUserInputEnvelope;

    @Field(() => [PaymentWhereUniqueInput], {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>>;
}
