import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereInput } from './place-where.input';
import { Type } from 'class-transformer';
import { PlaceUpdateWithoutReservationsInput } from './place-update-without-reservations.input';

@InputType()
export class PlaceUpdateToOneWithWhereWithoutReservationsInput {

    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: PlaceWhereInput;

    @Field(() => PlaceUpdateWithoutReservationsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutReservationsInput)
    data!: PlaceUpdateWithoutReservationsInput;
}
