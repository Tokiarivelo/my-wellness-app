import { SetMetadata } from '@nestjs/common';
import { RoleEnum } from '../enums/role.enum'; // Assurez-vous que vous avez défini vos rôles quelque part

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleEnum[]) => SetMetadata(ROLES_KEY, roles);
