import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReservationCreateInput } from './reservation-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReservationArgs {

    @Field(() => ReservationCreateInput, {nullable:false})
    @Type(() => ReservationCreateInput)
    data!: ReservationCreateInput;
}
