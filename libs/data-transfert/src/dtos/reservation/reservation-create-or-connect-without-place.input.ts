import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { Type } from 'class-transformer';
import { ReservationCreateWithoutPlaceInput } from './reservation-create-without-place.input';

@InputType()
export class ReservationCreateOrConnectWithoutPlaceInput {

    @Field(() => ReservationWhereUniqueInput, {nullable:false})
    @Type(() => ReservationWhereUniqueInput)
    where!: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;

    @Field(() => ReservationCreateWithoutPlaceInput, {nullable:false})
    @Type(() => ReservationCreateWithoutPlaceInput)
    create!: ReservationCreateWithoutPlaceInput;
}
