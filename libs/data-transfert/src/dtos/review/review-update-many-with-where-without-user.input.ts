import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewScalarWhereInput } from './review-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewUpdateManyMutationInput } from './review-update-many-mutation.input';

@InputType()
export class ReviewUpdateManyWithWhereWithoutUserInput {

    @Field(() => ReviewScalarWhereInput, {nullable:false})
    @Type(() => ReviewScalarWhereInput)
    where!: ReviewScalarWhereInput;

    @Field(() => ReviewUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewUpdateManyMutationInput)
    data!: ReviewUpdateManyMutationInput;
}
