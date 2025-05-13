import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaceImageUncheckedUpdateManyWithoutPlaceNestedInput } from '../place-image/place-image-unchecked-update-many-without-place-nested.input';
import { ReservationUncheckedUpdateManyWithoutPlaceNestedInput } from '../reservation/reservation-unchecked-update-many-without-place-nested.input';
import { ReviewUncheckedUpdateManyWithoutPlaceNestedInput } from '../review/review-unchecked-update-many-without-place-nested.input';

@InputType()
export class PlaceUncheckedUpdateWithoutTagsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    category?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaceImageUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    images?: PlaceImageUncheckedUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReservationUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reservations?: ReservationUncheckedUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutPlaceNestedInput;
}
