import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../.generated/prisma/client';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceUpdateToOneWithWhereWithoutReviewsInput } from './place-update-to-one-with-where-without-reviews.input';

@InputType()
export class PlaceUpdateOneRequiredWithoutReviewsNestedInput {

    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;

    @Field(() => PlaceUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => PlaceUpdateToOneWithWhereWithoutReviewsInput)
    update?: PlaceUpdateToOneWithWhereWithoutReviewsInput;
}
