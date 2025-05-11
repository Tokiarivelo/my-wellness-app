import { registerEnumType } from '@nestjs/graphql';

export enum PlaceImageScalarFieldEnum {
    id = "id",
    url = "url",
    placeId = "placeId"
}


registerEnumType(PlaceImageScalarFieldEnum, { name: 'PlaceImageScalarFieldEnum', description: undefined })
