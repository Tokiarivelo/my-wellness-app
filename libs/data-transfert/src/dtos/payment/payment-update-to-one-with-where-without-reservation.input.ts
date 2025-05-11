import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutReservationInput } from './payment-update-without-reservation.input';

@InputType()
export class PaymentUpdateToOneWithWhereWithoutReservationInput {

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;

    @Field(() => PaymentUpdateWithoutReservationInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutReservationInput)
    data!: PaymentUpdateWithoutReservationInput;
}
