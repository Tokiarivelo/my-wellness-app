import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutPlaceInput } from './tag-update-without-place.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;

    @Field(() => TagUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => TagUpdateWithoutPlaceInput)
    data!: TagUpdateWithoutPlaceInput;
}
