import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageWhereInput } from './user-image-where.input';

@InputType()
export class UserImageListRelationFilter {

    @Field(() => UserImageWhereInput, {nullable:true})
    every?: UserImageWhereInput;

    @Field(() => UserImageWhereInput, {nullable:true})
    some?: UserImageWhereInput;

    @Field(() => UserImageWhereInput, {nullable:true})
    none?: UserImageWhereInput;
}
