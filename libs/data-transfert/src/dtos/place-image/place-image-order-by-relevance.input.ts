import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceImageOrderByRelevanceFieldEnum } from './place-image-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PlaceImageOrderByRelevanceInput {

    @Field(() => [PlaceImageOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PlaceImageOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
