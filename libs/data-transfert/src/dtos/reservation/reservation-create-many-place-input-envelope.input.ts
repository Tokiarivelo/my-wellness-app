import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationCreateManyPlaceInput } from './reservation-create-many-place.input';
import { Type } from 'class-transformer';

@InputType()
export class ReservationCreateManyPlaceInputEnvelope {

    @Field(() => [ReservationCreateManyPlaceInput], {nullable:false})
    @Type(() => ReservationCreateManyPlaceInput)
    data!: Array<ReservationCreateManyPlaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
