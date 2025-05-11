import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceUpdateWithoutProviderInput } from './place-update-without-provider.input';

@InputType()
export class PlaceUpdateWithWhereUniqueWithoutProviderInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;

    @Field(() => PlaceUpdateWithoutProviderInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutProviderInput)
    data!: PlaceUpdateWithoutProviderInput;
}
