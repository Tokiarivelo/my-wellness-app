import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PlaceImageWhereUniqueInput } from './place-image-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceImageUpdateWithoutPlaceInput } from './place-image-update-without-place.input';
import { PlaceImageCreateWithoutPlaceInput } from './place-image-create-without-place.input';

@InputType()
export class PlaceImageUpsertWithWhereUniqueWithoutPlaceInput {

    @Field(() => PlaceImageWhereUniqueInput, {nullable:false})
    @Type(() => PlaceImageWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>;

    @Field(() => PlaceImageUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => PlaceImageUpdateWithoutPlaceInput)
    update!: PlaceImageUpdateWithoutPlaceInput;

    @Field(() => PlaceImageCreateWithoutPlaceInput, {nullable:false})
    @Type(() => PlaceImageCreateWithoutPlaceInput)
    create!: PlaceImageCreateWithoutPlaceInput;
}
