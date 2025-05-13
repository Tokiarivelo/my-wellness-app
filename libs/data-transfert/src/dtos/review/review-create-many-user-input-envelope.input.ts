import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyUserInput } from './review-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManyUserInputEnvelope {

    @Field(() => [ReviewCreateManyUserInput], {nullable:false})
    @Type(() => ReviewCreateManyUserInput)
    data!: Array<ReviewCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
