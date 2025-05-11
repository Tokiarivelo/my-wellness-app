import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTokensInput } from './user-create-without-tokens.input';

@InputType()
export class UserCreateOrConnectWithoutTokensInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutTokensInput)
    create!: UserCreateWithoutTokensInput;
}
