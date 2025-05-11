import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageOrderByRelevanceFieldEnum } from './user-image-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserImageOrderByRelevanceInput {

    @Field(() => [UserImageOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${UserImageOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
