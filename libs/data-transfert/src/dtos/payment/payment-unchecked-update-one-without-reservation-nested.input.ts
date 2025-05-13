import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutReservationInput } from './payment-create-without-reservation.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutReservationInput } from './payment-create-or-connect-without-reservation.input';
import { PaymentUpsertWithoutReservationInput } from './payment-upsert-without-reservation.input';
import { PaymentWhereInput } from './payment-where.input';
import { Prisma } from '../../prisma-module';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentUpdateToOneWithWhereWithoutReservationInput } from './payment-update-to-one-with-where-without-reservation.input';

@InputType()
export class PaymentUncheckedUpdateOneWithoutReservationNestedInput {

    @Field(() => PaymentCreateWithoutReservationInput, {nullable:true})
    @Type(() => PaymentCreateWithoutReservationInput)
    create?: PaymentCreateWithoutReservationInput;

    @Field(() => PaymentCreateOrConnectWithoutReservationInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutReservationInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput;

    @Field(() => PaymentUpsertWithoutReservationInput, {nullable:true})
    @Type(() => PaymentUpsertWithoutReservationInput)
    upsert?: PaymentUpsertWithoutReservationInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    disconnect?: PaymentWhereInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    delete?: PaymentWhereInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>;

    @Field(() => PaymentUpdateToOneWithWhereWithoutReservationInput, {nullable:true})
    @Type(() => PaymentUpdateToOneWithWhereWithoutReservationInput)
    update?: PaymentUpdateToOneWithWhereWithoutReservationInput;
}
