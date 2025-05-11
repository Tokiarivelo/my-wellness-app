import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    id = "id",
    userId = "userId",
    placeId = "placeId",
    comment = "comment",
    rating = "rating",
    createdAt = "createdAt"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })
