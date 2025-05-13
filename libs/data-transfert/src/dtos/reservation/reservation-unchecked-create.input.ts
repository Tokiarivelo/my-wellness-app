import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentUncheckedCreateNestedOneWithoutReservationInput } from '../payment/payment-unchecked-create-nested-one-without-reservation.input';

@InputType()
export class ReservationUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    placeId!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PaymentUncheckedCreateNestedOneWithoutReservationInput, {nullable:true})
    payment?: PaymentUncheckedCreateNestedOneWithoutReservationInput;
}
