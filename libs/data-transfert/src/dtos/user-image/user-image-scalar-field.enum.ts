import { registerEnumType } from '@nestjs/graphql';

export enum UserImageScalarFieldEnum {
    id = "id",
    url = "url",
    type = "type",
    userId = "userId"
}


registerEnumType(UserImageScalarFieldEnum, { name: 'UserImageScalarFieldEnum', description: undefined })
