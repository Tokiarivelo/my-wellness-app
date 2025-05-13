import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { PlaceImageWhereUniqueInput } from './place-image-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceImageUpdateWithoutPlaceInput } from './place-image-update-without-place.input';

@InputType()
export class PlaceImageUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => PlaceImageWhereUniqueInput, {nullable:false})
    @Type(() => PlaceImageWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>;

    @Field(() => PlaceImageUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => PlaceImageUpdateWithoutPlaceInput)
    data!: PlaceImageUpdateWithoutPlaceInput;
}
