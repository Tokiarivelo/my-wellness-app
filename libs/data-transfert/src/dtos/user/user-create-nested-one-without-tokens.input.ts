import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTokensInput } from './user-create-without-tokens.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTokensInput } from './user-create-or-connect-without-tokens.input';
import { Prisma } from '../../prisma-module';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTokensInput {

    @Field(() => UserCreateWithoutTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutTokensInput)
    create?: UserCreateWithoutTokensInput;

    @Field(() => UserCreateOrConnectWithoutTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTokensInput)
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
