import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutPlaceInput } from './tag-create-without-place.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutPlaceInput } from './tag-create-or-connect-without-place.input';
import { TagUpsertWithWhereUniqueWithoutPlaceInput } from './tag-upsert-with-where-unique-without-place.input';
import { TagCreateManyPlaceInputEnvelope } from './tag-create-many-place-input-envelope.input';
import { Prisma } from '../../.generated/prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutPlaceInput } from './tag-update-with-where-unique-without-place.input';
import { TagUpdateManyWithWhereWithoutPlaceInput } from './tag-update-many-with-where-without-place.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUncheckedUpdateManyWithoutPlaceNestedInput {

    @Field(() => [TagCreateWithoutPlaceInput], {nullable:true})
    @Type(() => TagCreateWithoutPlaceInput)
    create?: Array<TagCreateWithoutPlaceInput>;

    @Field(() => [TagCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutPlaceInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutPlaceInput>;

    @Field(() => TagCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => TagCreateManyPlaceInputEnvelope)
    createMany?: TagCreateManyPlaceInputEnvelope;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutPlaceInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutPlaceInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}
