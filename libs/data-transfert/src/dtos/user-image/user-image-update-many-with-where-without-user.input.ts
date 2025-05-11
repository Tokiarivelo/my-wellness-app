import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageScalarWhereInput } from './user-image-scalar-where.input';
import { Type } from 'class-transformer';
import { UserImageUpdateManyMutationInput } from './user-image-update-many-mutation.input';

@InputType()
export class UserImageUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserImageScalarWhereInput, {nullable:false})
    @Type(() => UserImageScalarWhereInput)
    where!: UserImageScalarWhereInput;

    @Field(() => UserImageUpdateManyMutationInput, {nullable:false})
    @Type(() => UserImageUpdateManyMutationInput)
    data!: UserImageUpdateManyMutationInput;
}
