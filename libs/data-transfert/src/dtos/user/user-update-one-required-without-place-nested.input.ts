import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPlaceInput } from './user-create-without-place.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPlaceInput } from './user-create-or-connect-without-place.input';
import { UserUpsertWithoutPlaceInput } from './user-upsert-without-place.input';
import { Prisma } from '../../prisma-module';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPlaceInput } from './user-update-to-one-with-where-without-place.input';

@InputType()
export class UserUpdateOneRequiredWithoutPlaceNestedInput {

    @Field(() => UserCreateWithoutPlaceInput, {nullable:true})
    @Type(() => UserCreateWithoutPlaceInput)
    create?: UserCreateWithoutPlaceInput;

    @Field(() => UserCreateOrConnectWithoutPlaceInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: UserCreateOrConnectWithoutPlaceInput;

    @Field(() => UserUpsertWithoutPlaceInput, {nullable:true})
    @Type(() => UserUpsertWithoutPlaceInput)
    upsert?: UserUpsertWithoutPlaceInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPlaceInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPlaceInput)
    update?: UserUpdateToOneWithWhereWithoutPlaceInput;
}
