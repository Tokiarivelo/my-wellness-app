import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PlaceImageWhereUniqueInput } from './place-image-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceImageCreateInput } from './place-image-create.input';
import { PlaceImageUpdateInput } from './place-image-update.input';

@ArgsType()
export class UpsertOnePlaceImageArgs {

    @Field(() => PlaceImageWhereUniqueInput, {nullable:false})
    @Type(() => PlaceImageWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>;

    @Field(() => PlaceImageCreateInput, {nullable:false})
    @Type(() => PlaceImageCreateInput)
    create!: PlaceImageCreateInput;

    @Field(() => PlaceImageUpdateInput, {nullable:false})
    @Type(() => PlaceImageUpdateInput)
    update!: PlaceImageUpdateInput;
}
