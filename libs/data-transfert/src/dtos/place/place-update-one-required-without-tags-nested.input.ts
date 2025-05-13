import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceUpdateToOneWithWhereWithoutTagsInput } from './place-update-to-one-with-where-without-tags.input';

@InputType()
export class PlaceUpdateOneRequiredWithoutTagsNestedInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;

    @Field(() => PlaceUpdateToOneWithWhereWithoutTagsInput, {nullable:true})
    @Type(() => PlaceUpdateToOneWithWhereWithoutTagsInput)
    update?: PlaceUpdateToOneWithWhereWithoutTagsInput;
}
