import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class PlaceCreateNestedOneWithoutTagsInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}
