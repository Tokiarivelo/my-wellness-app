import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutTagsInput } from '../place/place-create-nested-one-without-tags.input';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PlaceCreateNestedOneWithoutTagsInput, {nullable:false})
    place!: PlaceCreateNestedOneWithoutTagsInput;
}
