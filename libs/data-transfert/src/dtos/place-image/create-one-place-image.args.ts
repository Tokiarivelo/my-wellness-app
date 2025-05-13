import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceImageCreateInput } from './place-image-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlaceImageArgs {

    @Field(() => PlaceImageCreateInput, {nullable:false})
    @Type(() => PlaceImageCreateInput)
    data!: PlaceImageCreateInput;
}
