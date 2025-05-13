import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentUpdateWithoutReservationInput } from './payment-update-without-reservation.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutReservationInput } from './payment-create-without-reservation.input';
import { PaymentWhereInput } from './payment-where.input';

@InputType()
export class PaymentUpsertWithoutReservationInput {

    @Field(() => PaymentUpdateWithoutReservationInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutReservationInput)
    update!: PaymentUpdateWithoutReservationInput;

    @Field(() => PaymentCreateWithoutReservationInput, {nullable:false})
    @Type(() => PaymentCreateWithoutReservationInput)
    create!: PaymentCreateWithoutReservationInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;
}
