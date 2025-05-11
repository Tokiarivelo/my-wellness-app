import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewOrderByRelevanceFieldEnum } from './review-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ReviewOrderByRelevanceInput {

    @Field(() => [ReviewOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${ReviewOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
