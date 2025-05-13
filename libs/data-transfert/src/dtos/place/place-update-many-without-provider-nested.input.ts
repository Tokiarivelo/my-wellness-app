import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { PlaceWhereUniqueInput } from './place-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceUpdateWithWhereUniqueWithoutProviderInput } from './place-update-with-where-unique-without-provider.input';
import { PlaceUpdateManyWithWhereWithoutProviderInput } from './place-update-many-with-where-without-provider.input';
import { PlaceScalarWhereInput } from './place-scalar-where.input';

@InputType()
export class PlaceUpdateManyWithoutProviderNestedInput {

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;

    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;

    @Field(() => [PlaceUpdateWithWhereUniqueWithoutProviderInput], {nullable:true})
    @Type(() => PlaceUpdateWithWhereUniqueWithoutProviderInput)
    update?: Array<PlaceUpdateWithWhereUniqueWithoutProviderInput>;

    @Field(() => [PlaceUpdateManyWithWhereWithoutProviderInput], {nullable:true})
    @Type(() => PlaceUpdateManyWithWhereWithoutProviderInput)
    updateMany?: Array<PlaceUpdateManyWithWhereWithoutProviderInput>;

    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    @Type(() => PlaceScalarWhereInput)
    deleteMany?: Array<PlaceScalarWhereInput>;
}
