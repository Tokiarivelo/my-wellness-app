import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePaymentArgs {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>;
}
