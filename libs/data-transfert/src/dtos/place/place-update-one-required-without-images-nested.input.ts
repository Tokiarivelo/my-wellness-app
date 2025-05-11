import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceUpdateToOneWithWhereWithoutImagesInput } from './place-update-to-one-with-where-without-images.input';

@InputType()
export class PlaceUpdateOneRequiredWithoutImagesNestedInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;

    @Field(() => PlaceUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => PlaceUpdateToOneWithWhereWithoutImagesInput)
    update?: PlaceUpdateToOneWithWhereWithoutImagesInput;
}
