import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserImageScalarWhereInput {

    @Field(() => [UserImageScalarWhereInput], {nullable:true})
    AND?: Array<UserImageScalarWhereInput>;

    @Field(() => [UserImageScalarWhereInput], {nullable:true})
    OR?: Array<UserImageScalarWhereInput>;

    @Field(() => [UserImageScalarWhereInput], {nullable:true})
    NOT?: Array<UserImageScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
