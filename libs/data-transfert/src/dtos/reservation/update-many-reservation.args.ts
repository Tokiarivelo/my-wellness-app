import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReservationUpdateManyMutationInput } from './reservation-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReservationWhereInput } from './reservation-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyReservationArgs {

    @Field(() => ReservationUpdateManyMutationInput, {nullable:false})
    @Type(() => ReservationUpdateManyMutationInput)
    data!: ReservationUpdateManyMutationInput;

    @Field(() => ReservationWhereInput, {nullable:true})
    @Type(() => ReservationWhereInput)
    where?: ReservationWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
