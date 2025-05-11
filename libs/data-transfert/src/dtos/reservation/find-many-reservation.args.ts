import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReservationWhereInput } from './reservation-where.input';
import { Type } from 'class-transformer';
import { ReservationOrderByWithRelationInput } from './reservation-order-by-with-relation.input';
import { Prisma } from '../../.generated/prisma/client';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReservationScalarFieldEnum } from './reservation-scalar-field.enum';

@ArgsType()
export class FindManyReservationArgs {

    @Field(() => ReservationWhereInput, {nullable:true})
    @Type(() => ReservationWhereInput)
    where?: ReservationWhereInput;

    @Field(() => [ReservationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReservationOrderByWithRelationInput>;

    @Field(() => ReservationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReservationScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReservationScalarFieldEnum}`>;
}
