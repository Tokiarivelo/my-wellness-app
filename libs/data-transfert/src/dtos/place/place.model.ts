import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { PlaceImage } from '../place-image/place-image.model';
import { Reservation } from '../reservation/reservation.model';
import { Review } from '../review/review.model';
import { Tag } from '../tag/tag.model';
import { PlaceCount } from './place-count.output';

@ObjectType()
export class Place {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    provider?: User;

    @Field(() => [PlaceImage], {nullable:true})
    images?: Array<PlaceImage>;

    @Field(() => [Reservation], {nullable:true})
    reservations?: Array<Reservation>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => PlaceCount, {nullable:false})
    _count?: PlaceCount;
}
