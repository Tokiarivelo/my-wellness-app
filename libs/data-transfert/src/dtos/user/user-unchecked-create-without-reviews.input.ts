import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentUncheckedCreateNestedManyWithoutUserInput } from '../payment/payment-unchecked-create-nested-many-without-user.input';
import { PlaceUncheckedCreateNestedManyWithoutProviderInput } from '../place/place-unchecked-create-nested-many-without-provider.input';
import { RefreshTokenUncheckedCreateNestedManyWithoutUserInput } from '../refresh-token/refresh-token-unchecked-create-nested-many-without-user.input';
import { ReservationUncheckedCreateNestedManyWithoutUserInput } from '../reservation/reservation-unchecked-create-nested-many-without-user.input';
import { UserImageUncheckedCreateNestedManyWithoutUserInput } from '../user-image/user-image-unchecked-create-nested-many-without-user.input';
import { RoleUncheckedCreateNestedManyWithoutUsersInput } from '../role/role-unchecked-create-nested-many-without-users.input';

@InputType()
export class UserUncheckedCreateWithoutReviewsInput {

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

    @Field(() => PaymentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PlaceUncheckedCreateNestedManyWithoutProviderInput, {nullable:true})
    Place?: PlaceUncheckedCreateNestedManyWithoutProviderInput;

    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReservationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserImageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    images?: UserImageUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: RoleUncheckedCreateNestedManyWithoutUsersInput;
}
