import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-module';
import { ReservationWhereUniqueInput } from './reservation-where-unique.input';
import { Type } from 'class-transformer';
import { ReservationCreateWithoutUserInput } from './reservation-create-without-user.input';

@InputType()
export class ReservationCreateOrConnectWithoutUserInput {

    @Field(() => ReservationWhereUniqueInput, {nullable:false})
    @Type(() => ReservationWhereUniqueInput)
    where!: Prisma.AtLeast<ReservationWhereUniqueInput, 'id'>;

    @Field(() => ReservationCreateWithoutUserInput, {nullable:false})
    @Type(() => ReservationCreateWithoutUserInput)
    create!: ReservationCreateWithoutUserInput;
}
