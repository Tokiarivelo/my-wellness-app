import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlaceImageWhereInput } from './place-image-where.input';
import { Type } from 'class-transformer';
import { PlaceImageOrderByWithRelationInput } from './place-image-order-by-with-relation.input';
import { Prisma } from '../../prisma-module';
import { PlaceImageWhereUniqueInput } from './place-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlaceImageScalarFieldEnum } from './place-image-scalar-field.enum';

@ArgsType()
export class FindManyPlaceImageArgs {
  @Field(() => PlaceImageWhereInput, { nullable: true })
  @Type(() => PlaceImageWhereInput)
  where?: PlaceImageWhereInput;

  @Field(() => [PlaceImageOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PlaceImageOrderByWithRelationInput>;

  @Field(() => PlaceImageWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [PlaceImageScalarFieldEnum], { nullable: true })
  distinct?: Array<PlaceImageScalarFieldEnum>;
}
