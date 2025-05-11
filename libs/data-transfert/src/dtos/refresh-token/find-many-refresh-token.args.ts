import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefreshTokenWhereInput } from './refresh-token-where.input';
import { Type } from 'class-transformer';
import { RefreshTokenOrderByWithRelationInput } from './refresh-token-order-by-with-relation.input';
import { Prisma } from '../../.generated/prisma/client';
import { RefreshTokenWhereUniqueInput } from './refresh-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RefreshTokenScalarFieldEnum } from './refresh-token-scalar-field.enum';

@ArgsType()
export class FindManyRefreshTokenArgs {

    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: RefreshTokenWhereInput;

    @Field(() => [RefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithRelationInput>;

    @Field(() => RefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RefreshTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RefreshTokenScalarFieldEnum}`>;
}
