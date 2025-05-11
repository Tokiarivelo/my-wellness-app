import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReviewsInput } from './user-update-without-reviews.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReviewsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewsInput)
    data!: UserUpdateWithoutReviewsInput;
}
