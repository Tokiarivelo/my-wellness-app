import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateNestedOneWithoutReservationInput } from '../payment/payment-create-nested-one-without-reservation.input';
import { PlaceCreateNestedOneWithoutReservationsInput } from '../place/place-create-nested-one-without-reservations.input';

@InputType()
export class ReservationCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PaymentCreateNestedOneWithoutReservationInput, {nullable:true})
    payment?: PaymentCreateNestedOneWithoutReservationInput;

    @Field(() => PlaceCreateNestedOneWithoutReservationsInput, {nullable:false})
    place!: PlaceCreateNestedOneWithoutReservationsInput;
}
