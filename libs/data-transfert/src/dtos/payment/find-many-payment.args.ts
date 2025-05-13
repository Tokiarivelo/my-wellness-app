import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { Type } from 'class-transformer';
import { PaymentOrderByWithRelationInput } from './payment-order-by-with-relation.input';
import { Prisma } from '../../prisma-module';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentScalarFieldEnum } from './payment-scalar-field.enum';

@ArgsType()
export class FindManyPaymentArgs {
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: PaymentWhereInput;

  @Field(() => [PaymentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PaymentOrderByWithRelationInput>;

  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'reservationId'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [PaymentScalarFieldEnum], { nullable: true })
  distinct?: Array<PaymentScalarFieldEnum>;
}
