import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageUpdateInput } from './user-image-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../.generated/prisma/client';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';

@ArgsType()
export class UpdateOneUserImageArgs {

    @Field(() => UserImageUpdateInput, {nullable:false})
    @Type(() => UserImageUpdateInput)
    data!: UserImageUpdateInput;

    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;
}
