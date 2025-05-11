import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { Type } from 'class-transformer';
import { PaymentOrderByWithAggregationInput } from './payment-order-by-with-aggregation.input';
import { PaymentScalarFieldEnum } from './payment-scalar-field.enum';
import { PaymentScalarWhereWithAggregatesInput } from './payment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PaymentCountAggregateInput } from './payment-count-aggregate.input';
import { PaymentAvgAggregateInput } from './payment-avg-aggregate.input';
import { PaymentSumAggregateInput } from './payment-sum-aggregate.input';
import { PaymentMinAggregateInput } from './payment-min-aggregate.input';
import { PaymentMaxAggregateInput } from './payment-max-aggregate.input';

@ArgsType()
export class PaymentGroupByArgs {

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;

    @Field(() => [PaymentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PaymentOrderByWithAggregationInput>;

    @Field(() => [PaymentScalarFieldEnum], {nullable:false})
    by!: Array<`${PaymentScalarFieldEnum}`>;

    @Field(() => PaymentScalarWhereWithAggregatesInput, {nullable:true})
    having?: PaymentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PaymentCountAggregateInput, {nullable:true})
    _count?: PaymentCountAggregateInput;

    @Field(() => PaymentAvgAggregateInput, {nullable:true})
    _avg?: PaymentAvgAggregateInput;

    @Field(() => PaymentSumAggregateInput, {nullable:true})
    _sum?: PaymentSumAggregateInput;

    @Field(() => PaymentMinAggregateInput, {nullable:true})
    _min?: PaymentMinAggregateInput;

    @Field(() => PaymentMaxAggregateInput, {nullable:true})
    _max?: PaymentMaxAggregateInput;
}
