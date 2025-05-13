import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereInput } from './place-where.input';
import { Type } from 'class-transformer';
import { PlaceUpdateWithoutImagesInput } from './place-update-without-images.input';

@InputType()
export class PlaceUpdateToOneWithWhereWithoutImagesInput {

    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: PlaceWhereInput;

    @Field(() => PlaceUpdateWithoutImagesInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutImagesInput)
    data!: PlaceUpdateWithoutImagesInput;
}
