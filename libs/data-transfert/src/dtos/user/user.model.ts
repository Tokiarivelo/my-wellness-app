import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Payment } from '../payment/payment.model';
import { Place } from '../place/place.model';
import { RefreshToken } from '../refresh-token/refresh-token.model';
import { Reservation } from '../reservation/reservation.model';
import { Review } from '../review/review.model';
import { UserImage } from '../user-image/user-image.model';
import { Role } from '../role/role.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isVerified!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Payment], {nullable:true})
    Payment?: Array<Payment>;

    @Field(() => [Place], {nullable:true})
    Place?: Array<Place>;

    @Field(() => [RefreshToken], {nullable:true})
    tokens?: Array<RefreshToken>;

    @Field(() => [Reservation], {nullable:true})
    reservations?: Array<Reservation>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [UserImage], {nullable:true})
    images?: Array<UserImage>;

    @Field(() => [Role], {nullable:true})
    Role?: Array<Role>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
