import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceUpdateToOneWithWhereWithoutReservationsInput } from './place-update-to-one-with-where-without-reservations.input';

@InputType()
export class PlaceUpdateOneRequiredWithoutReservationsNestedInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;

    @Field(() => PlaceUpdateToOneWithWhereWithoutReservationsInput, {nullable:true})
    @Type(() => PlaceUpdateToOneWithWhereWithoutReservationsInput)
    update?: PlaceUpdateToOneWithWhereWithoutReservationsInput;
}
