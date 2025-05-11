import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentUpdateInput } from './payment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../.generated/prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@ArgsType()
export class UpdateOnePaymentArgs {

    @Field(() => PaymentUpdateInput, {nullable:false})
    @Type(() => PaymentUpdateInput)
    data!: PaymentUpdateInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>;
}
