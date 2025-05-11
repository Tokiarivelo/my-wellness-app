import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentCreateInput } from './payment-create.input';
import { PaymentUpdateInput } from './payment-update.input';

@ArgsType()
export class UpsertOnePaymentArgs {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>;

    @Field(() => PaymentCreateInput, {nullable:false})
    @Type(() => PaymentCreateInput)
    create!: PaymentCreateInput;

    @Field(() => PaymentUpdateInput, {nullable:false})
    @Type(() => PaymentUpdateInput)
    update!: PaymentUpdateInput;
}
