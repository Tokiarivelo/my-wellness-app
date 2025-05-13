import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { RefreshTokenWhereUniqueInput } from './refresh-token-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneRefreshTokenArgs {

    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
}
