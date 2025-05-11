import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationCreateManyUserInput } from './reservation-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReservationCreateManyUserInputEnvelope {

    @Field(() => [ReservationCreateManyUserInput], {nullable:false})
    @Type(() => ReservationCreateManyUserInput)
    data!: Array<ReservationCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
