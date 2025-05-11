import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutImagesInput } from '../place/place-create-nested-one-without-images.input';

@InputType()
export class PlaceImageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => PlaceCreateNestedOneWithoutImagesInput, {nullable:false})
    place!: PlaceCreateNestedOneWithoutImagesInput;
}
