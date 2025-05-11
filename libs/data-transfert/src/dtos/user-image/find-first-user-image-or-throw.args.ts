import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageWhereInput } from './user-image-where.input';
import { Type } from 'class-transformer';
import { UserImageOrderByWithRelationInput } from './user-image-order-by-with-relation.input';
import { Prisma } from '../../.generated/prisma/client';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserImageScalarFieldEnum } from './user-image-scalar-field.enum';

@ArgsType()
export class FindFirstUserImageOrThrowArgs {

    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: UserImageWhereInput;

    @Field(() => [UserImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserImageOrderByWithRelationInput>;

    @Field(() => UserImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserImageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserImageScalarFieldEnum}`>;
}
