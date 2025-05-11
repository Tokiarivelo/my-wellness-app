import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutImagesInput } from '../user/user-create-nested-one-without-images.input';

@InputType()
export class UserImageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => UserCreateNestedOneWithoutImagesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutImagesInput;
}
