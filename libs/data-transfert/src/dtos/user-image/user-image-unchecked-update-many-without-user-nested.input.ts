import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageCreateWithoutUserInput } from './user-image-create-without-user.input';
import { Type } from 'class-transformer';
import { UserImageCreateOrConnectWithoutUserInput } from './user-image-create-or-connect-without-user.input';
import { UserImageUpsertWithWhereUniqueWithoutUserInput } from './user-image-upsert-with-where-unique-without-user.input';
import { UserImageCreateManyUserInputEnvelope } from './user-image-create-many-user-input-envelope.input';
import { Prisma } from '../../.generated/prisma/client';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';
import { UserImageUpdateWithWhereUniqueWithoutUserInput } from './user-image-update-with-where-unique-without-user.input';
import { UserImageUpdateManyWithWhereWithoutUserInput } from './user-image-update-many-with-where-without-user.input';
import { UserImageScalarWhereInput } from './user-image-scalar-where.input';

@InputType()
export class UserImageUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserImageCreateWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateWithoutUserInput)
    create?: Array<UserImageCreateWithoutUserInput>;

    @Field(() => [UserImageCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserImageCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserImageCreateOrConnectWithoutUserInput>;

    @Field(() => [UserImageUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserImageUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserImageUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserImageCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserImageCreateManyUserInputEnvelope)
    createMany?: UserImageCreateManyUserInputEnvelope;

    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;

    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;

    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;

    @Field(() => [UserImageWhereUniqueInput], {nullable:true})
    @Type(() => UserImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserImageWhereUniqueInput, 'id'>>;

    @Field(() => [UserImageUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserImageUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserImageUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserImageUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserImageUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserImageUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserImageScalarWhereInput], {nullable:true})
    @Type(() => UserImageScalarWhereInput)
    deleteMany?: Array<UserImageScalarWhereInput>;
}
