import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutReservationsInput } from '../place/place-create-nested-one-without-reservations.input';
import { UserCreateNestedOneWithoutReservationsInput } from '../user/user-create-nested-one-without-reservations.input';

@InputType()
export class ReservationCreateWithoutPaymentInput {

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

    @Field(() => PlaceCreateNestedOneWithoutReservationsInput, {nullable:false})
    place!: PlaceCreateNestedOneWithoutReservationsInput;

    @Field(() => UserCreateNestedOneWithoutReservationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReservationsInput;
}
