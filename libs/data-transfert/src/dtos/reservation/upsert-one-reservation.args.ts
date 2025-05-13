import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { Type } from 'class-transformer';
import { ReservationCreateInput } from './reservation-create.input';
import { ReservationUpdateInput } from './reservation-update.input';

@ArgsType()
export class UpsertOneReservationArgs {

    @Field(() => ReservationWhereUniqueInput, {nullable:false})
    @Type(() => ReservationWhereUniqueInput)
    where!: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;

    @Field(() => ReservationCreateInput, {nullable:false})
    @Type(() => ReservationCreateInput)
    create!: ReservationCreateInput;

    @Field(() => ReservationUpdateInput, {nullable:false})
    @Type(() => ReservationUpdateInput)
    update!: ReservationUpdateInput;
}
