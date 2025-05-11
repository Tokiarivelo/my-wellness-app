import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUsersInput } from './role-create-without-users.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutUsersInput } from './role-create-or-connect-without-users.input';
import { Prisma } from '../../.generated/prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [RoleCreateWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateWithoutUsersInput)
    create?: Array<RoleCreateWithoutUsersInput>;

    @Field(() => [RoleCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUsersInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>>;
}
