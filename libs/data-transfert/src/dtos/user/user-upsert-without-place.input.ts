import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPlaceInput } from './user-update-without-place.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPlaceInput } from './user-create-without-place.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPlaceInput {

    @Field(() => UserUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => UserUpdateWithoutPlaceInput)
    update!: UserUpdateWithoutPlaceInput;

    @Field(() => UserCreateWithoutPlaceInput, {nullable:false})
    @Type(() => UserCreateWithoutPlaceInput)
    create!: UserCreateWithoutPlaceInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
