import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceImageCreateManyInput } from './place-image-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlaceImageArgs {

    @Field(() => [PlaceImageCreateManyInput], {nullable:false})
    @Type(() => PlaceImageCreateManyInput)
    data!: Array<PlaceImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
