import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { RefreshTokenWhereUniqueInput } from './refresh-token-where-unique.input';
import { Type } from 'class-transformer';
import { RefreshTokenCreateInput } from './refresh-token-create.input';
import { RefreshTokenUpdateInput } from './refresh-token-update.input';

@ArgsType()
export class UpsertOneRefreshTokenArgs {

    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;

    @Field(() => RefreshTokenCreateInput, {nullable:false})
    @Type(() => RefreshTokenCreateInput)
    create!: RefreshTokenCreateInput;

    @Field(() => RefreshTokenUpdateInput, {nullable:false})
    @Type(() => RefreshTokenUpdateInput)
    update!: RefreshTokenUpdateInput;
}
