import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageCreateInput } from './user-image-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserImageArgs {

    @Field(() => UserImageCreateInput, {nullable:false})
    @Type(() => UserImageCreateInput)
    data!: UserImageCreateInput;
}
