import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationCreateWithoutPaymentInput } from './reservation-create-without-payment.input';
import { Type } from 'class-transformer';
import { ReservationCreateOrConnectWithoutPaymentInput } from './reservation-create-or-connect-without-payment.input';
import { ReservationUpsertWithoutPaymentInput } from './reservation-upsert-without-payment.input';
import { Prisma } from '../../.generated/prisma/client';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { ReservationUpdateToOneWithWhereWithoutPaymentInput } from './reservation-update-to-one-with-where-without-payment.input';

@InputType()
export class ReservationUpdateOneRequiredWithoutPaymentNestedInput {

    @Field(() => ReservationCreateWithoutPaymentInput, {nullable:true})
    @Type(() => ReservationCreateWithoutPaymentInput)
    create?: ReservationCreateWithoutPaymentInput;

    @Field(() => ReservationCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => ReservationCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentInput;

    @Field(() => ReservationUpsertWithoutPaymentInput, {nullable:true})
    @Type(() => ReservationUpsertWithoutPaymentInput)
    upsert?: ReservationUpsertWithoutPaymentInput;

    @Field(() => ReservationWhereUniqueInput, {nullable:true})
    @Type(() => ReservationWhereUniqueInput)
    connect?: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;

    @Field(() => ReservationUpdateToOneWithWhereWithoutPaymentInput, {nullable:true})
    @Type(() => ReservationUpdateToOneWithWhereWithoutPaymentInput)
    update?: ReservationUpdateToOneWithWhereWithoutPaymentInput;
}
