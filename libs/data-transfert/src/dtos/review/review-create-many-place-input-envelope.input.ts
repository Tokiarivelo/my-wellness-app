import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyPlaceInput } from './review-create-many-place.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManyPlaceInputEnvelope {

    @Field(() => [ReviewCreateManyPlaceInput], {nullable:false})
    @Type(() => ReviewCreateManyPlaceInput)
    data!: Array<ReviewCreateManyPlaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
