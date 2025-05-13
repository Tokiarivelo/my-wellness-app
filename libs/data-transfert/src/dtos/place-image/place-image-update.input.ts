import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PlaceUpdateOneRequiredWithoutImagesNestedInput } from '../place/place-update-one-required-without-images-nested.input';

@InputType()
export class PlaceImageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => PlaceUpdateOneRequiredWithoutImagesNestedInput, {nullable:true})
    place?: PlaceUpdateOneRequiredWithoutImagesNestedInput;
}
