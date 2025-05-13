import { registerEnumType } from '@nestjs/graphql';

export enum PaymentOrderByRelevanceFieldEnum {
    id = "id",
    userId = "userId",
    reservationId = "reservationId",
    method = "method",
    status = "status"
}


registerEnumType(PaymentOrderByRelevanceFieldEnum, { name: 'PaymentOrderByRelevanceFieldEnum', description: undefined })
