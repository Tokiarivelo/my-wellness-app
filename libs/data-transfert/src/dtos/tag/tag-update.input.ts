import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PlaceUpdateOneRequiredWithoutTagsNestedInput } from '../place/place-update-one-required-without-tags-nested.input';

@InputType()
export class TagUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PlaceUpdateOneRequiredWithoutTagsNestedInput, {nullable:true})
    place?: PlaceUpdateOneRequiredWithoutTagsNestedInput;
}
