import { registerEnumType } from '@nestjs/graphql';

export enum RoleOrderByRelevanceFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(RoleOrderByRelevanceFieldEnum, { name: 'RoleOrderByRelevanceFieldEnum', description: undefined })
