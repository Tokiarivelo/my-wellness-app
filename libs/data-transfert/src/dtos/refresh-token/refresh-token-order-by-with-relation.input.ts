import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { RefreshTokenOrderByRelevanceInput } from './refresh-token-order-by-relevance.input';

@InputType()
export class RefreshTokenOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => RefreshTokenOrderByRelevanceInput, {nullable:true})
    _relevance?: RefreshTokenOrderByRelevanceInput;
}
