import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentScalarWhereInput } from './payment-scalar-where.input';
import { Type } from 'class-transformer';
import { PaymentUpdateManyMutationInput } from './payment-update-many-mutation.input';

@InputType()
export class PaymentUpdateManyWithWhereWithoutUserInput {

    @Field(() => PaymentScalarWhereInput, {nullable:false})
    @Type(() => PaymentScalarWhereInput)
    where!: PaymentScalarWhereInput;

    @Field(() => PaymentUpdateManyMutationInput, {nullable:false})
    @Type(() => PaymentUpdateManyMutationInput)
    data!: PaymentUpdateManyMutationInput;
}
