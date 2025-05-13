import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationCreateWithoutPaymentInput } from './reservation-create-without-payment.input';
import { Type } from 'class-transformer';
import { ReservationCreateOrConnectWithoutPaymentInput } from './reservation-create-or-connect-without-payment.input';
import { Prisma } from '../../prisma-module';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';

@InputType()
export class ReservationCreateNestedOneWithoutPaymentInput {

    @Field(() => ReservationCreateWithoutPaymentInput, {nullable:true})
    @Type(() => ReservationCreateWithoutPaymentInput)
    create?: ReservationCreateWithoutPaymentInput;

    @Field(() => ReservationCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => ReservationCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentInput;

    @Field(() => ReservationWhereUniqueInput, {nullable:true})
    @Type(() => ReservationWhereUniqueInput)
    connect?: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;
}
