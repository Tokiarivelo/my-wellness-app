import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutReviewsInput } from '../place/place-create-nested-one-without-reviews.input';

@InputType()
export class ReviewCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PlaceCreateNestedOneWithoutReviewsInput, {nullable:false})
    place!: PlaceCreateNestedOneWithoutReviewsInput;
}
