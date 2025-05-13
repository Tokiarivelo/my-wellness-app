import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { Type } from 'class-transformer';
import { ReservationUpdateWithoutPlaceInput } from './reservation-update-without-place.input';
import { ReservationCreateWithoutPlaceInput } from './reservation-create-without-place.input';

@InputType()
export class ReservationUpsertWithWhereUniqueWithoutPlaceInput {

    @Field(() => ReservationWhereUniqueInput, {nullable:false})
    @Type(() => ReservationWhereUniqueInput)
    where!: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;

    @Field(() => ReservationUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => ReservationUpdateWithoutPlaceInput)
    update!: ReservationUpdateWithoutPlaceInput;

    @Field(() => ReservationCreateWithoutPlaceInput, {nullable:false})
    @Type(() => ReservationCreateWithoutPlaceInput)
    create!: ReservationCreateWithoutPlaceInput;
}
