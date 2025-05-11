import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PaymentScalarWhereInput {

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    AND?: Array<PaymentScalarWhereInput>;

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    OR?: Array<PaymentScalarWhereInput>;

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    NOT?: Array<PaymentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    reservationId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    method?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
