import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRoleInput } from './user-update-without-role.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateWithoutRoleInput, {nullable:false})
    @Type(() => UserUpdateWithoutRoleInput)
    data!: UserUpdateWithoutRoleInput;
}
