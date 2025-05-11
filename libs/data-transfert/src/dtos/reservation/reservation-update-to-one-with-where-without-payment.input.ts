import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationWhereInput } from './reservation-where.input';
import { Type } from 'class-transformer';
import { ReservationUpdateWithoutPaymentInput } from './reservation-update-without-payment.input';

@InputType()
export class ReservationUpdateToOneWithWhereWithoutPaymentInput {

    @Field(() => ReservationWhereInput, {nullable:true})
    @Type(() => ReservationWhereInput)
    where?: ReservationWhereInput;

    @Field(() => ReservationUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => ReservationUpdateWithoutPaymentInput)
    data!: ReservationUpdateWithoutPaymentInput;
}
