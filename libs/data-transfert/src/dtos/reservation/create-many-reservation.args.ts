import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReservationCreateManyInput } from './reservation-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReservationArgs {

    @Field(() => [ReservationCreateManyInput], {nullable:false})
    @Type(() => ReservationCreateManyInput)
    data!: Array<ReservationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
