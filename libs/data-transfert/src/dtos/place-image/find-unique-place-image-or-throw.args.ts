import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PlaceImageWhereUniqueInput } from './place-image-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlaceImageOrThrowArgs {

    @Field(() => PlaceImageWhereUniqueInput, {nullable:false})
    @Type(() => PlaceImageWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>;
}
