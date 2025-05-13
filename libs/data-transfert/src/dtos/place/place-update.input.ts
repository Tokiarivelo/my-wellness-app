import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPlaceNestedInput } from '../user/user-update-one-required-without-place-nested.input';
import { PlaceImageUpdateManyWithoutPlaceNestedInput } from '../place-image/place-image-update-many-without-place-nested.input';
import { ReservationUpdateManyWithoutPlaceNestedInput } from '../reservation/reservation-update-many-without-place-nested.input';
import { ReviewUpdateManyWithoutPlaceNestedInput } from '../review/review-update-many-without-place-nested.input';
import { TagUpdateManyWithoutPlaceNestedInput } from '../tag/tag-update-many-without-place-nested.input';

@InputType()
export class PlaceUpdateInput {

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

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPlaceNestedInput, {nullable:true})
    provider?: UserUpdateOneRequiredWithoutPlaceNestedInput;

    @Field(() => PlaceImageUpdateManyWithoutPlaceNestedInput, {nullable:true})
    images?: PlaceImageUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReservationUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reservations?: ReservationUpdateManyWithoutPlaceNestedInput;

    @Field(() => ReviewUpdateManyWithoutPlaceNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutPlaceNestedInput;

    @Field(() => TagUpdateManyWithoutPlaceNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutPlaceNestedInput;
}
