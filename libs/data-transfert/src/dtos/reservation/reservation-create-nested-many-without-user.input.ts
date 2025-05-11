import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationCreateWithoutUserInput } from './reservation-create-without-user.input';
import { Type } from 'class-transformer';
import { ReservationCreateOrConnectWithoutUserInput } from './reservation-create-or-connect-without-user.input';
import { ReservationCreateManyUserInputEnvelope } from './reservation-create-many-user-input-envelope.input';
import { Prisma } from '../../.generated/prisma/client';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';

@InputType()
export class ReservationCreateNestedManyWithoutUserInput {

    @Field(() => [ReservationCreateWithoutUserInput], {nullable:true})
    @Type(() => ReservationCreateWithoutUserInput)
    create?: Array<ReservationCreateWithoutUserInput>;

    @Field(() => [ReservationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReservationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReservationCreateOrConnectWithoutUserInput>;

    @Field(() => ReservationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReservationCreateManyUserInputEnvelope)
    createMany?: ReservationCreateManyUserInputEnvelope;

    @Field(() => [ReservationWhereUniqueInput], {nullable:true})
    @Type(() => ReservationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>>;
}
