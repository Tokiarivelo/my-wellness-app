import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentCreateManyInput } from './payment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPaymentArgs {

    @Field(() => [PaymentCreateManyInput], {nullable:false})
    @Type(() => PaymentCreateManyInput)
    data!: Array<PaymentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
