import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ReservationScalarRelationFilter } from '../reservation/reservation-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class PaymentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    reservationId?: string;

    @Field(() => [PaymentWhereInput], {nullable:true})
    AND?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    OR?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    NOT?: Array<PaymentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    method?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ReservationScalarRelationFilter, {nullable:true})
    reservation?: ReservationScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
