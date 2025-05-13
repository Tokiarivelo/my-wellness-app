import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class PlaceCreateNestedManyWithoutProviderInput {

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
}
