import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutReservationInput } from './payment-create-without-reservation.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutReservationInput } from './payment-create-or-connect-without-reservation.input';
import { Prisma } from '../../prisma-module';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@InputType()
export class PaymentCreateNestedOneWithoutReservationInput {

    @Field(() => PaymentCreateWithoutReservationInput, {nullable:true})
    @Type(() => PaymentCreateWithoutReservationInput)
    create?: PaymentCreateWithoutReservationInput;

    @Field(() => PaymentCreateOrConnectWithoutReservationInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutReservationInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>;
}
