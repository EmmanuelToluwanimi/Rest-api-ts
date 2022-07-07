import { Request, Response, NextFunction } from "express";
import { omit, get } from "lodash";
import { verifyJwt } from "../utils/jwt.utils";


export const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = get(req, 'headers.authorization', '').replace('Bearer ', '');
    if (!accessToken) {
        return next();
    }

    const {decoded} = verifyJwt(accessToken);
    if (decoded){
        res.locals.user = decoded;
    }

    return next();
}