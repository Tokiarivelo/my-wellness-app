import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPaymentInput } from './user-create-without-payment.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPaymentInput } from './user-create-or-connect-without-payment.input';
import { Prisma } from '../../.generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPaymentInput {

    @Field(() => UserCreateWithoutPaymentInput, {nullable:true})
    @Type(() => UserCreateWithoutPaymentInput)
    create?: UserCreateWithoutPaymentInput;

    @Field(() => UserCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
