import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefreshTokenUpdateManyMutationInput } from './refresh-token-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RefreshTokenWhereInput } from './refresh-token-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRefreshTokenArgs {

    @Field(() => RefreshTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => RefreshTokenUpdateManyMutationInput)
    data!: RefreshTokenUpdateManyMutationInput;

    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: RefreshTokenWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
