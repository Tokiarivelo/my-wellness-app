import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationWhereInput } from './reservation-where.input';

@InputType()
export class ReservationListRelationFilter {

    @Field(() => ReservationWhereInput, {nullable:true})
    every?: ReservationWhereInput;

    @Field(() => ReservationWhereInput, {nullable:true})
    some?: ReservationWhereInput;

    @Field(() => ReservationWhereInput, {nullable:true})
    none?: ReservationWhereInput;
}
