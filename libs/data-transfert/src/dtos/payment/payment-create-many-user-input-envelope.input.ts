import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateManyUserInput } from './payment-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentCreateManyUserInputEnvelope {

    @Field(() => [PaymentCreateManyUserInput], {nullable:false})
    @Type(() => PaymentCreateManyUserInput)
    data!: Array<PaymentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
