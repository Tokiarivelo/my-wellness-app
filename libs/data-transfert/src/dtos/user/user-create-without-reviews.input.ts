import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateNestedManyWithoutUserInput } from '../payment/payment-create-nested-many-without-user.input';
import { PlaceCreateNestedManyWithoutProviderInput } from '../place/place-create-nested-many-without-provider.input';
import { RefreshTokenCreateNestedManyWithoutUserInput } from '../refresh-token/refresh-token-create-nested-many-without-user.input';
import { ReservationCreateNestedManyWithoutUserInput } from '../reservation/reservation-create-nested-many-without-user.input';
import { UserImageCreateNestedManyWithoutUserInput } from '../user-image/user-image-create-nested-many-without-user.input';
import { RoleCreateNestedManyWithoutUsersInput } from '../role/role-create-nested-many-without-users.input';

@InputType()
export class UserCreateWithoutReviewsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PaymentCreateNestedManyWithoutUserInput, {nullable:true})
    Payment?: PaymentCreateNestedManyWithoutUserInput;

    @Field(() => PlaceCreateNestedManyWithoutProviderInput, {nullable:true})
    Place?: PlaceCreateNestedManyWithoutProviderInput;

    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput;

    @Field(() => ReservationCreateNestedManyWithoutUserInput, {nullable:true})
    reservations?: ReservationCreateNestedManyWithoutUserInput;

    @Field(() => UserImageCreateNestedManyWithoutUserInput, {nullable:true})
    images?: UserImageCreateNestedManyWithoutUserInput;

    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: RoleCreateNestedManyWithoutUsersInput;
}
