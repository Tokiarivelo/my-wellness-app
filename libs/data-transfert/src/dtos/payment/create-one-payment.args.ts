import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentCreateInput } from './payment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePaymentArgs {

    @Field(() => PaymentCreateInput, {nullable:false})
    @Type(() => PaymentCreateInput)
    data!: PaymentCreateInput;
}
