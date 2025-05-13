import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePlaceArgs {

    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}
