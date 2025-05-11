import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlaceScalarWhereInput } from './place-scalar-where.input';
import { Type } from 'class-transformer';
import { PlaceUpdateManyMutationInput } from './place-update-many-mutation.input';

@InputType()
export class PlaceUpdateManyWithWhereWithoutProviderInput {

    @Field(() => PlaceScalarWhereInput, {nullable:false})
    @Type(() => PlaceScalarWhereInput)
    where!: PlaceScalarWhereInput;

    @Field(() => PlaceUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaceUpdateManyMutationInput)
    data!: PlaceUpdateManyMutationInput;
}
