import { registerEnumType } from '@nestjs/graphql';

export enum PlaceImageOrderByRelevanceFieldEnum {
    id = "id",
    url = "url",
    placeId = "placeId"
}


registerEnumType(PlaceImageOrderByRelevanceFieldEnum, { name: 'PlaceImageOrderByRelevanceFieldEnum', description: undefined })
