import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PaymentUpdateManyWithoutUserNestedInput } from '../payment/payment-update-many-without-user-nested.input';
import { RefreshTokenUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-update-many-without-user-nested.input';
import { ReservationUpdateManyWithoutUserNestedInput } from '../reservation/reservation-update-many-without-user-nested.input';
import { ReviewUpdateManyWithoutUserNestedInput } from '../review/review-update-many-without-user-nested.input';
import { UserImageUpdateManyWithoutUserNestedInput } from '../user-image/user-image-update-many-without-user-nested.input';
import { RoleUpdateManyWithoutUsersNestedInput } from '../role/role-update-many-without-users-nested.input';

@InputType()
export class UserUpdateWithoutPlaceInput {

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

    @Field(() => PaymentUpdateManyWithoutUserNestedInput, {nullable:true})
    Payment?: PaymentUpdateManyWithoutUserNestedInput;

    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput;

    @Field(() => ReservationUpdateManyWithoutUserNestedInput, {nullable:true})
    reservations?: ReservationUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutUserNestedInput;

    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: UserImageUpdateManyWithoutUserNestedInput;

    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: RoleUpdateManyWithoutUsersNestedInput;
}
