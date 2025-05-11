import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageUpdateManyMutationInput } from './user-image-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserImageWhereInput } from './user-image-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUserImageArgs {

    @Field(() => UserImageUpdateManyMutationInput, {nullable:false})
    @Type(() => UserImageUpdateManyMutationInput)
    data!: UserImageUpdateManyMutationInput;

    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: UserImageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
