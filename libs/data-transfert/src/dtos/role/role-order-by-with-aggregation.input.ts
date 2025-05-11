import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleCountOrderByAggregateInput } from './role-count-order-by-aggregate.input';
import { RoleMaxOrderByAggregateInput } from './role-max-order-by-aggregate.input';
import { RoleMinOrderByAggregateInput } from './role-min-order-by-aggregate.input';

@InputType()
export class RoleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => RoleCountOrderByAggregateInput, {nullable:true})
    _count?: RoleCountOrderByAggregateInput;

    @Field(() => RoleMaxOrderByAggregateInput, {nullable:true})
    _max?: RoleMaxOrderByAggregateInput;

    @Field(() => RoleMinOrderByAggregateInput, {nullable:true})
    _min?: RoleMinOrderByAggregateInput;
}
