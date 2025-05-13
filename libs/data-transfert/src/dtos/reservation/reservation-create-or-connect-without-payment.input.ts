import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { Type } from 'class-transformer';
import { ReservationCreateWithoutPaymentInput } from './reservation-create-without-payment.input';

@InputType()
export class ReservationCreateOrConnectWithoutPaymentInput {

    @Field(() => ReservationWhereUniqueInput, {nullable:false})
    @Type(() => ReservationWhereUniqueInput)
    where!: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;

    @Field(() => ReservationCreateWithoutPaymentInput, {nullable:false})
    @Type(() => ReservationCreateWithoutPaymentInput)
    create!: ReservationCreateWithoutPaymentInput;
}
