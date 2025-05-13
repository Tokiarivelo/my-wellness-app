import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceImageUpdateInput } from './place-image-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../prisma-module';
import { PlaceImageWhereUniqueInput } from './place-image-where-unique.input';

@ArgsType()
export class UpdateOnePlaceImageArgs {

    @Field(() => PlaceImageUpdateInput, {nullable:false})
    @Type(() => PlaceImageUpdateInput)
    data!: PlaceImageUpdateInput;

    @Field(() => PlaceImageWhereUniqueInput, {nullable:false})
    @Type(() => PlaceImageWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>;
}
