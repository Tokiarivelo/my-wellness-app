import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPaymentInput } from './user-create-without-payment.input';

@InputType()
export class UserCreateOrConnectWithoutPaymentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutPaymentInput, {nullable:false})
    @Type(() => UserCreateWithoutPaymentInput)
    create!: UserCreateWithoutPaymentInput;
}
