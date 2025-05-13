import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleUpdateManyMutationInput } from './role-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RoleWhereInput } from './role-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRoleArgs {

    @Field(() => RoleUpdateManyMutationInput, {nullable:false})
    @Type(() => RoleUpdateManyMutationInput)
    data!: RoleUpdateManyMutationInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
