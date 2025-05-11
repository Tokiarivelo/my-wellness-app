import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPaymentInput } from './user-create-without-payment.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPaymentInput } from './user-create-or-connect-without-payment.input';
import { UserUpsertWithoutPaymentInput } from './user-upsert-without-payment.input';
import { Prisma } from '../../.generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPaymentInput } from './user-update-to-one-with-where-without-payment.input';

@InputType()
export class UserUpdateOneRequiredWithoutPaymentNestedInput {

    @Field(() => UserCreateWithoutPaymentInput, {nullable:true})
    @Type(() => UserCreateWithoutPaymentInput)
    create?: UserCreateWithoutPaymentInput;

    @Field(() => UserCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput;

    @Field(() => UserUpsertWithoutPaymentInput, {nullable:true})
    @Type(() => UserUpsertWithoutPaymentInput)
    upsert?: UserUpsertWithoutPaymentInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPaymentInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPaymentInput)
    update?: UserUpdateToOneWithWhereWithoutPaymentInput;
}
