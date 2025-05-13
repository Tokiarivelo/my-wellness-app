import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImagesInput } from './user-create-without-images.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImagesInput } from './user-create-or-connect-without-images.input';
import { Prisma } from '../../prisma-module';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutImagesInput {

    @Field(() => UserCreateWithoutImagesInput, {nullable:true})
    @Type(() => UserCreateWithoutImagesInput)
    create?: UserCreateWithoutImagesInput;

    @Field(() => UserCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImagesInput)
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
