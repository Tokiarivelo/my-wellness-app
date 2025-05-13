import { registerEnumType } from '@nestjs/graphql';

export enum ReviewOrderByRelevanceFieldEnum {
    id = "id",
    userId = "userId",
    placeId = "placeId",
    comment = "comment"
}


registerEnumType(ReviewOrderByRelevanceFieldEnum, { name: 'ReviewOrderByRelevanceFieldEnum', description: undefined })
