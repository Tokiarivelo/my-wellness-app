import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceImageCreateManyPlaceInput } from './place-image-create-many-place.input';
import { Type } from 'class-transformer';

@InputType()
export class PlaceImageCreateManyPlaceInputEnvelope {

    @Field(() => [PlaceImageCreateManyPlaceInput], {nullable:false})
    @Type(() => PlaceImageCreateManyPlaceInput)
    data!: Array<PlaceImageCreateManyPlaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
