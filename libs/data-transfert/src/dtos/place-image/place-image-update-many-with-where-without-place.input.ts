import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceImageScalarWhereInput } from './place-image-scalar-where.input';
import { Type } from 'class-transformer';
import { PlaceImageUpdateManyMutationInput } from './place-image-update-many-mutation.input';

@InputType()
export class PlaceImageUpdateManyWithWhereWithoutPlaceInput {

    @Field(() => PlaceImageScalarWhereInput, {nullable:false})
    @Type(() => PlaceImageScalarWhereInput)
    where!: PlaceImageScalarWhereInput;

    @Field(() => PlaceImageUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaceImageUpdateManyMutationInput)
    data!: PlaceImageUpdateManyMutationInput;
}
