import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRoleArgs {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
}
