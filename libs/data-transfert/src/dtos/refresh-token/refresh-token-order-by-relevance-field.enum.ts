import { registerEnumType } from '@nestjs/graphql';

export enum RefreshTokenOrderByRelevanceFieldEnum {
    id = "id",
    token = "token",
    userId = "userId"
}


registerEnumType(RefreshTokenOrderByRelevanceFieldEnum, { name: 'RefreshTokenOrderByRelevanceFieldEnum', description: undefined })
