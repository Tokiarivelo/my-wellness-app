import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationCreateWithoutUserInput } from './reservation-create-without-user.input';
import { Type } from 'class-transformer';
import { ReservationCreateOrConnectWithoutUserInput } from './reservation-create-or-connect-without-user.input';
import { ReservationUpsertWithWhereUniqueWithoutUserInput } from './reservation-upsert-with-where-unique-without-user.input';
import { ReservationCreateManyUserInputEnvelope } from './reservation-create-many-user-input-envelope.input';
import { Prisma } from '../../.generated/prisma/client';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { ReservationUpdateWithWhereUniqueWithoutUserInput } from './reservation-update-with-where-unique-without-user.input';
import { ReservationUpdateManyWithWhereWithoutUserInput } from './reservation-update-many-with-where-without-user.input';
import { ReservationScalarWhereInput } from './reservation-scalar-where.input';

@InputType()
export class ReservationUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ReservationCreateWithoutUserInput], {nullable:true})
    @Type(() => ReservationCreateWithoutUserInput)
    create?: Array<ReservationCreateWithoutUserInput>;

    @Field(() => [ReservationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReservationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReservationCreateOrConnectWithoutUserInput>;

    @Field(() => [ReservationUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReservationUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReservationUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReservationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReservationCreateManyUserInputEnvelope)
    createMany?: ReservationCreateManyUserInputEnvelope;

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

    @Field(() => [ReservationUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReservationUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReservationUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReservationUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReservationUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReservationUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReservationScalarWhereInput], {nullable:true})
    @Type(() => ReservationScalarWhereInput)
    deleteMany?: Array<ReservationScalarWhereInput>;
}
