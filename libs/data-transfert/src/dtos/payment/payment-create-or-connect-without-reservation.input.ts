import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutReservationInput } from './payment-create-without-reservation.input';

@InputType()
export class PaymentCreateOrConnectWithoutReservationInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>;

    @Field(() => PaymentCreateWithoutReservationInput, {nullable:false})
    @Type(() => PaymentCreateWithoutReservationInput)
    create!: PaymentCreateWithoutReservationInput;
}
