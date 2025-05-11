import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReservationUpdateInput } from './reservation-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../.generated/prisma/client';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';

@ArgsType()
export class UpdateOneReservationArgs {

    @Field(() => ReservationUpdateInput, {nullable:false})
    @Type(() => ReservationUpdateInput)
    data!: ReservationUpdateInput;

    @Field(() => ReservationWhereUniqueInput, {nullable:false})
    @Type(() => ReservationWhereUniqueInput)
    where!: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;
}
