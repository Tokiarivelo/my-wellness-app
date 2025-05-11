import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTokensInput } from './user-update-without-tokens.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTokensInput } from './user-create-without-tokens.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutTokensInput {

    @Field(() => UserUpdateWithoutTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutTokensInput)
    update!: UserUpdateWithoutTokensInput;

    @Field(() => UserCreateWithoutTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutTokensInput)
    create!: UserCreateWithoutTokensInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
