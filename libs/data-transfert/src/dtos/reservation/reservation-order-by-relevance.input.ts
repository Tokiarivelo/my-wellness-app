import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReservationOrderByRelevanceFieldEnum } from './reservation-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ReservationOrderByRelevanceInput {

    @Field(() => [ReservationOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${ReservationOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
