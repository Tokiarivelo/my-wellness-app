import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutUserInput } from './payment-create-without-user.input';

@InputType()
export class PaymentCreateOrConnectWithoutUserInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>;

    @Field(() => PaymentCreateWithoutUserInput, {nullable:false})
    @Type(() => PaymentCreateWithoutUserInput)
    create!: PaymentCreateWithoutUserInput;
}
