import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceImageCreateWithoutPlaceInput } from './place-image-create-without-place.input';
import { Type } from 'class-transformer';
import { PlaceImageCreateOrConnectWithoutPlaceInput } from './place-image-create-or-connect-without-place.input';
import { PlaceImageUpsertWithWhereUniqueWithoutPlaceInput } from './place-image-upsert-with-where-unique-without-place.input';
import { PlaceImageCreateManyPlaceInputEnvelope } from './place-image-create-many-place-input-envelope.input';
import { Prisma } from '../../prisma-module';
import { PlaceImageWhereUniqueInput } from './place-image-where-unique.input';
import { PlaceImageUpdateWithWhereUniqueWithoutPlaceInput } from './place-image-update-with-where-unique-without-place.input';
import { PlaceImageUpdateManyWithWhereWithoutPlaceInput } from './place-image-update-many-with-where-without-place.input';
import { PlaceImageScalarWhereInput } from './place-image-scalar-where.input';

@InputType()
export class PlaceImageUpdateManyWithoutPlaceNestedInput {

    @Field(() => [PlaceImageCreateWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceImageCreateWithoutPlaceInput)
    create?: Array<PlaceImageCreateWithoutPlaceInput>;

    @Field(() => [PlaceImageCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceImageCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<PlaceImageCreateOrConnectWithoutPlaceInput>;

    @Field(() => [PlaceImageUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceImageUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<PlaceImageUpsertWithWhereUniqueWithoutPlaceInput>;

    @Field(() => PlaceImageCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => PlaceImageCreateManyPlaceInputEnvelope)
    createMany?: PlaceImageCreateManyPlaceInputEnvelope;

    @Field(() => [PlaceImageWhereUniqueInput], {nullable:true})
    @Type(() => PlaceImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>>;

    @Field(() => [PlaceImageWhereUniqueInput], {nullable:true})
    @Type(() => PlaceImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>>;

    @Field(() => [PlaceImageWhereUniqueInput], {nullable:true})
    @Type(() => PlaceImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>>;

    @Field(() => [PlaceImageWhereUniqueInput], {nullable:true})
    @Type(() => PlaceImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>>;

    @Field(() => [PlaceImageUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceImageUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<PlaceImageUpdateWithWhereUniqueWithoutPlaceInput>;

    @Field(() => [PlaceImageUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => PlaceImageUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<PlaceImageUpdateManyWithWhereWithoutPlaceInput>;

    @Field(() => [PlaceImageScalarWhereInput], {nullable:true})
    @Type(() => PlaceImageScalarWhereInput)
    deleteMany?: Array<PlaceImageScalarWhereInput>;
}
