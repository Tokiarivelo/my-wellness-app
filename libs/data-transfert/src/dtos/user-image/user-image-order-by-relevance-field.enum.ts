import { registerEnumType } from '@nestjs/graphql';

export enum UserImageOrderByRelevanceFieldEnum {
    id = "id",
    url = "url",
    type = "type",
    userId = "userId"
}


registerEnumType(UserImageOrderByRelevanceFieldEnum, { name: 'UserImageOrderByRelevanceFieldEnum', description: undefined })
