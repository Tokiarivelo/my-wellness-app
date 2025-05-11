import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Payment } from '../payment/payment.model';
import { Place } from '../place/place.model';
import { User } from '../user/user.model';

@ObjectType()
export class Reservation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    placeId!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Payment, {nullable:true})
    payment?: Payment | null;

    @Field(() => Place, {nullable:false})
    place?: Place;

    @Field(() => User, {nullable:false})
    user?: User;
}
