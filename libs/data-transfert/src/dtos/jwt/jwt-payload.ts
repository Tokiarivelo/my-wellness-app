/**
 * Represents the payload of a JSON Web Token (JWT).
 * This class is used to define the structure of the data
 * contained within a JWT, which is typically used for
 * authentication and authorization purposes.
 */
export class JwtPayload {
  sub?: string; // correspond généralement à l'ID utilisateur
  email?: string;
  username?: string;
  roles?: string[]; // ou Role[] si tu utilises un enum
  iat?: number; // Issued At (optionnel, généré automatiquement par JWT)
  exp?: number; // Expiration Time (optionnel)
}
