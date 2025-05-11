import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceImageUpdateManyMutationInput } from './place-image-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlaceImageWhereInput } from './place-image-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPlaceImageArgs {

    @Field(() => PlaceImageUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaceImageUpdateManyMutationInput)
    data!: PlaceImageUpdateManyMutationInput;

    @Field(() => PlaceImageWhereInput, {nullable:true})
    @Type(() => PlaceImageWhereInput)
    where?: PlaceImageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
