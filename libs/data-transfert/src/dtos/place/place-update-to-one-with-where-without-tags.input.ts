import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereInput } from './place-where.input';
import { Type } from 'class-transformer';
import { PlaceUpdateWithoutTagsInput } from './place-update-without-tags.input';

@InputType()
export class PlaceUpdateToOneWithWhereWithoutTagsInput {

    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: PlaceWhereInput;

    @Field(() => PlaceUpdateWithoutTagsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutTagsInput)
    data!: PlaceUpdateWithoutTagsInput;
}
