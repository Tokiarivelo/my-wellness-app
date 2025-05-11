import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTokensInput } from '../user/user-create-nested-one-without-tokens.input';

@InputType()
export class RefreshTokenCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutTokensInput, {nullable:false})
    user!: UserCreateNestedOneWithoutTokensInput;
}
