import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PaymentUncheckedUpdateManyWithoutUserNestedInput } from '../payment/payment-unchecked-update-many-without-user-nested.input';
import { PlaceUncheckedUpdateManyWithoutProviderNestedInput } from '../place/place-unchecked-update-many-without-provider-nested.input';
import { RefreshTokenUncheckedUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-unchecked-update-many-without-user-nested.input';
import { ReservationUncheckedUpdateManyWithoutUserNestedInput } from '../reservation/reservation-unchecked-update-many-without-user-nested.input';
import { UserImageUncheckedUpdateManyWithoutUserNestedInput } from '../user-image/user-image-unchecked-update-many-without-user-nested.input';
import { RoleUncheckedUpdateManyWithoutUsersNestedInput } from '../role/role-unchecked-update-many-without-users-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutReviewsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PaymentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PlaceUncheckedUpdateManyWithoutProviderNestedInput, {nullable:true})
    Place?: PlaceUncheckedUpdateManyWithoutProviderNestedInput;

    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReservationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: UserImageUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: RoleUncheckedUpdateManyWithoutUsersNestedInput;
}
