import { registerEnumType } from '@nestjs/graphql';

export enum TagOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    placeId = "placeId"
}


registerEnumType(TagOrderByRelevanceFieldEnum, { name: 'TagOrderByRelevanceFieldEnum', description: undefined })
