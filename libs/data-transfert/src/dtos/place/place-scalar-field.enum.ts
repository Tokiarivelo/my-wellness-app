import { registerEnumType } from '@nestjs/graphql';

export enum PlaceScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    category = "category",
    price = "price",
    providerId = "providerId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PlaceScalarFieldEnum, { name: 'PlaceScalarFieldEnum', description: undefined })
