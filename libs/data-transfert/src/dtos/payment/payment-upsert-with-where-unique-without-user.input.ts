import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutUserInput } from './payment-update-without-user.input';
import { PaymentCreateWithoutUserInput } from './payment-create-without-user.input';

@InputType()
export class PaymentUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>;

    @Field(() => PaymentUpdateWithoutUserInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutUserInput)
    update!: PaymentUpdateWithoutUserInput;

    @Field(() => PaymentCreateWithoutUserInput, {nullable:false})
    @Type(() => PaymentCreateWithoutUserInput)
    create!: PaymentCreateWithoutUserInput;
}
