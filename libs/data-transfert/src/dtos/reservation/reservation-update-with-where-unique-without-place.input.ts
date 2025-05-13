import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { Type } from 'class-transformer';
import { ReservationUpdateWithoutPlaceInput } from './reservation-update-without-place.input';

@InputType()
export class ReservationUpdateWithWhereUniqueWithoutPlaceInput {

    @Field(() => ReservationWhereUniqueInput, {nullable:false})
    @Type(() => ReservationWhereUniqueInput)
    where!: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;

    @Field(() => ReservationUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => ReservationUpdateWithoutPlaceInput)
    data!: ReservationUpdateWithoutPlaceInput;
}
