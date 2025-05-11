import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceOrderByRelevanceFieldEnum } from './place-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PlaceOrderByRelevanceInput {

    @Field(() => [PlaceOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PlaceOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
