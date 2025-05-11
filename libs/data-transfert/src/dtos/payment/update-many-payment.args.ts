import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentUpdateManyMutationInput } from './payment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PaymentWhereInput } from './payment-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPaymentArgs {

    @Field(() => PaymentUpdateManyMutationInput, {nullable:false})
    @Type(() => PaymentUpdateManyMutationInput)
    data!: PaymentUpdateManyMutationInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
