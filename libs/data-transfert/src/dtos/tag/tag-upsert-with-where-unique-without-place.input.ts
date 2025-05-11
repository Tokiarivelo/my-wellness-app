import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutPlaceInput } from './tag-update-without-place.input';
import { TagCreateWithoutPlaceInput } from './tag-create-without-place.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutPlaceInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;

    @Field(() => TagUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => TagUpdateWithoutPlaceInput)
    update!: TagUpdateWithoutPlaceInput;

    @Field(() => TagCreateWithoutPlaceInput, {nullable:false})
    @Type(() => TagCreateWithoutPlaceInput)
    create!: TagCreateWithoutPlaceInput;
}
