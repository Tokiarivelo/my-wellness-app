import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefreshTokenOrderByRelevanceFieldEnum } from './refresh-token-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RefreshTokenOrderByRelevanceInput {

    @Field(() => [RefreshTokenOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${RefreshTokenOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
