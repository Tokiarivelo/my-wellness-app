import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageCreateManyInput } from './user-image-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserImageArgs {

    @Field(() => [UserImageCreateManyInput], {nullable:false})
    @Type(() => UserImageCreateManyInput)
    data!: Array<UserImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
