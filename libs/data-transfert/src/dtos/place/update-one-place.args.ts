import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceUpdateInput } from './place-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../prisma-module';
import { PlaceWhereUniqueInput } from './place-where-unique.input';

@ArgsType()
export class UpdateOnePlaceArgs {

    @Field(() => PlaceUpdateInput, {nullable:false})
    @Type(() => PlaceUpdateInput)
    data!: PlaceUpdateInput;

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}
