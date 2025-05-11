import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateManyPlaceInput } from './tag-create-many-place.input';
import { Type } from 'class-transformer';

@InputType()
export class TagCreateManyPlaceInputEnvelope {

    @Field(() => [TagCreateManyPlaceInput], {nullable:false})
    @Type(() => TagCreateManyPlaceInput)
    data!: Array<TagCreateManyPlaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
