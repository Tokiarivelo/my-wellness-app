import { registerEnumType } from '@nestjs/graphql';

export enum PaymentScalarFieldEnum {
    id = "id",
    userId = "userId",
    reservationId = "reservationId",
    amount = "amount",
    method = "method",
    status = "status",
    createdAt = "createdAt"
}


registerEnumType(PaymentScalarFieldEnum, { name: 'PaymentScalarFieldEnum', description: undefined })
