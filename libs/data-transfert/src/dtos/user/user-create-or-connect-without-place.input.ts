import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPlaceInput } from './user-create-without-place.input';

@InputType()
export class UserCreateOrConnectWithoutPlaceInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutPlaceInput, {nullable:false})
    @Type(() => UserCreateWithoutPlaceInput)
    create!: UserCreateWithoutPlaceInput;
}
