import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceWhereInput } from './place-where.input';
import { Type } from 'class-transformer';
import { PlaceUpdateWithoutReviewsInput } from './place-update-without-reviews.input';

@InputType()
export class PlaceUpdateToOneWithWhereWithoutReviewsInput {

    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: PlaceWhereInput;

    @Field(() => PlaceUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutReviewsInput)
    data!: PlaceUpdateWithoutReviewsInput;
}
