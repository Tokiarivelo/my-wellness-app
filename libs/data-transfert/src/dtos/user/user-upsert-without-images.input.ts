import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutImagesInput } from './user-update-without-images.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImagesInput } from './user-create-without-images.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutImagesInput {

    @Field(() => UserUpdateWithoutImagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutImagesInput)
    update!: UserUpdateWithoutImagesInput;

    @Field(() => UserCreateWithoutImagesInput, {nullable:false})
    @Type(() => UserCreateWithoutImagesInput)
    create!: UserCreateWithoutImagesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
