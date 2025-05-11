import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleOrderByRelevanceFieldEnum } from './role-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RoleOrderByRelevanceInput {

    @Field(() => [RoleOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${RoleOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
