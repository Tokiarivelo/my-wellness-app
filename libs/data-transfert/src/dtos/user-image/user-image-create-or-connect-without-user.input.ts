import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';
import { Type } from 'class-transformer';
import { UserImageCreateWithoutUserInput } from './user-image-create-without-user.input';

@InputType()
export class UserImageCreateOrConnectWithoutUserInput {

    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>;

    @Field(() => UserImageCreateWithoutUserInput, {nullable:false})
    @Type(() => UserImageCreateWithoutUserInput)
    create!: UserImageCreateWithoutUserInput;
}
