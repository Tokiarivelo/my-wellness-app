import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationWhereInput } from './reservation-where.input';

@InputType()
export class ReservationScalarRelationFilter {

    @Field(() => ReservationWhereInput, {nullable:true})
    is?: ReservationWhereInput;

    @Field(() => ReservationWhereInput, {nullable:true})
    isNot?: ReservationWhereInput;
}
