/**
 * Represents the payload of a JSON Web Token (JWT).
 * This class is used to define the structure of the data
 * contained within a JWT, which is typically used for
 * authentication and authorization purposes.
 */
export declare class JwtPayload {
    sub?: string;
    email?: string;
    roles?: string[];
    iat?: number;
    exp?: number;
}
//# sourceMappingURL=jwt-payload.d.ts.map