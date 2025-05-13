import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationCreateWithoutPlaceInput } from './reservation-create-without-place.input';
import { Type } from 'class-transformer';
import { ReservationCreateOrConnectWithoutPlaceInput } from './reservation-create-or-connect-without-place.input';
import { ReservationUpsertWithWhereUniqueWithoutPlaceInput } from './reservation-upsert-with-where-unique-without-place.input';
import { ReservationCreateManyPlaceInputEnvelope } from './reservation-create-many-place-input-envelope.input';
import { Prisma } from '../../prisma-module';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { ReservationUpdateWithWhereUniqueWithoutPlaceInput } from './reservation-update-with-where-unique-without-place.input';
import { ReservationUpdateManyWithWhereWithoutPlaceInput } from './reservation-update-many-with-where-without-place.input';
import { ReservationScalarWhereInput } from './reservation-scalar-where.input';

@InputType()
export class ReservationUncheckedUpdateManyWithoutPlaceNestedInput {

    @Field(() => [ReservationCreateWithoutPlaceInput], {nullable:true})
    @Type(() => ReservationCreateWithoutPlaceInput)
    create?: Array<ReservationCreateWithoutPlaceInput>;

    @Field(() => [ReservationCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => ReservationCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<ReservationCreateOrConnectWithoutPlaceInput>;

    @Field(() => [ReservationUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReservationUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<ReservationUpsertWithWhereUniqueWithoutPlaceInput>;

    @Field(() => ReservationCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => ReservationCreateManyPlaceInputEnvelope)
    createMany?: ReservationCreateManyPlaceInputEnvelope;

    @Field(() => [ReservationWhereUniqueInput], {nullable:true})
    @Type(() => ReservationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>>;

    @Field(() => [ReservationWhereUniqueInput], {nullable:true})
    @Type(() => ReservationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>>;

    @Field(() => [ReservationWhereUniqueInput], {nullable:true})
    @Type(() => ReservationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>>;

    @Field(() => [ReservationWhereUniqueInput], {nullable:true})
    @Type(() => ReservationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>>;

    @Field(() => [ReservationUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => ReservationUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<ReservationUpdateWithWhereUniqueWithoutPlaceInput>;

    @Field(() => [ReservationUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => ReservationUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<ReservationUpdateManyWithWhereWithoutPlaceInput>;

    @Field(() => [ReservationScalarWhereInput], {nullable:true})
    @Type(() => ReservationScalarWhereInput)
    deleteMany?: Array<ReservationScalarWhereInput>;
}
