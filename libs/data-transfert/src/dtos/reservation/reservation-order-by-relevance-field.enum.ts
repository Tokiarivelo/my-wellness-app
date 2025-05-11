import { registerEnumType } from '@nestjs/graphql';

export enum ReservationOrderByRelevanceFieldEnum {
    id = "id",
    userId = "userId",
    placeId = "placeId",
    status = "status"
}


registerEnumType(ReservationOrderByRelevanceFieldEnum, { name: 'ReservationOrderByRelevanceFieldEnum', description: undefined })
