import { JwtPayload } from "../payload/jwtPayload"

declare global{
    namespace Express{
        interface Request{
            user?: JwtPayload
        }
    }
}