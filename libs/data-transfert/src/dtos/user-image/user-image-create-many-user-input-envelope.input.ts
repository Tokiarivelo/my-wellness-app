import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageCreateManyUserInput } from './user-image-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserImageCreateManyUserInputEnvelope {

    @Field(() => [UserImageCreateManyUserInput], {nullable:false})
    @Type(() => UserImageCreateManyUserInput)
    data!: Array<UserImageCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
