import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentOrderByRelevanceFieldEnum } from './payment-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PaymentOrderByRelevanceInput {

    @Field(() => [PaymentOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PaymentOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
