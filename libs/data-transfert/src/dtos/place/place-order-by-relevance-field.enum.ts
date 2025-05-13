import { registerEnumType } from '@nestjs/graphql';

export enum PlaceOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    category = "category",
    providerId = "providerId"
}


registerEnumType(PlaceOrderByRelevanceFieldEnum, { name: 'PlaceOrderByRelevanceFieldEnum', description: undefined })
