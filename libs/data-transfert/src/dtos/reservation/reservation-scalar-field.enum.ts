import { registerEnumType } from '@nestjs/graphql';

export enum ReservationScalarFieldEnum {
    id = "id",
    userId = "userId",
    placeId = "placeId",
    status = "status",
    date = "date",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReservationScalarFieldEnum, { name: 'ReservationScalarFieldEnum', description: undefined })
