import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImagesInput } from './user-create-without-images.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImagesInput } from './user-create-or-connect-without-images.input';
import { UserUpsertWithoutImagesInput } from './user-upsert-without-images.input';
import { Prisma } from '../../prisma-module';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutImagesInput } from './user-update-to-one-with-where-without-images.input';

@InputType()
export class UserUpdateOneRequiredWithoutImagesNestedInput {

    @Field(() => UserCreateWithoutImagesInput, {nullable:true})
    @Type(() => UserCreateWithoutImagesInput)
    create?: UserCreateWithoutImagesInput;

    @Field(() => UserCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImagesInput)
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput;

    @Field(() => UserUpsertWithoutImagesInput, {nullable:true})
    @Type(() => UserUpsertWithoutImagesInput)
    upsert?: UserUpsertWithoutImagesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutImagesInput)
    update?: UserUpdateToOneWithWhereWithoutImagesInput;
}
