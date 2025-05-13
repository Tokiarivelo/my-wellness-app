import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageCreateWithoutUserInput } from './user-image-create-without-user.input';
import { Type } from 'class-transformer';
import { UserImageCreateOrConnectWithoutUserInput } from './user-image-create-or-connect-without-user.input';
import { UserImageCreateManyUserInputEnvelope } from './user-image-create-many-user-input-envelope.input';
import { Prisma } from '../../prisma-module';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';

@InputType()
export class UserImageCreateNestedManyWithoutUserInput {

    @Field(() => [UserImageCreateWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateWithoutUserInput)
    create?: Array<UserImageCreateWithoutUserInput>;

    @Field(() => [UserImageCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserImageCreateOrConnectWithoutUserInput>;

    @Field(() => UserImageCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserImageCreateManyUserInputEnvelope)
    createMany?: UserImageCreateManyUserInputEnvelope;

    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;
}
