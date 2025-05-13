import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceImageWhereInput } from './place-image-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPlaceImageArgs {

    @Field(() => PlaceImageWhereInput, {nullable:true})
    @Type(() => PlaceImageWhereInput)
    where?: PlaceImageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
