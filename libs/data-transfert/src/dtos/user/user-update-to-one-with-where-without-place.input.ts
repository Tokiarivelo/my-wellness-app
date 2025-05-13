import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPlaceInput } from './user-update-without-place.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPlaceInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => UserUpdateWithoutPlaceInput)
    data!: UserUpdateWithoutPlaceInput;
}
