import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationUpdateWithoutPaymentInput } from './reservation-update-without-payment.input';
import { Type } from 'class-transformer';
import { ReservationCreateWithoutPaymentInput } from './reservation-create-without-payment.input';
import { ReservationWhereInput } from './reservation-where.input';

@InputType()
export class ReservationUpsertWithoutPaymentInput {

    @Field(() => ReservationUpdateWithoutPaymentInput, {nullable:false})
    @Type(() => ReservationUpdateWithoutPaymentInput)
    update!: ReservationUpdateWithoutPaymentInput;

    @Field(() => ReservationCreateWithoutPaymentInput, {nullable:false})
    @Type(() => ReservationCreateWithoutPaymentInput)
    create!: ReservationCreateWithoutPaymentInput;

    @Field(() => ReservationWhereInput, {nullable:true})
    @Type(() => ReservationWhereInput)
    where?: ReservationWhereInput;
}
