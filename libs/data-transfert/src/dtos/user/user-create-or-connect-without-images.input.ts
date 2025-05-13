import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImagesInput } from './user-create-without-images.input';

@InputType()
export class UserCreateOrConnectWithoutImagesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutImagesInput, {nullable:false})
    @Type(() => UserCreateWithoutImagesInput)
    create!: UserCreateWithoutImagesInput;
}
