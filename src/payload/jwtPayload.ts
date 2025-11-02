export interface JwtPayload{
    id:number,
    nombre:string,
    email:string,
    iat?: number;
    exp?: number;
}