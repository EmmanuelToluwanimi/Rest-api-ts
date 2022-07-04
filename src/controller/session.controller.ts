import {Request, Response} from 'express';
import { createSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';
import config from 'config';


export async function createUserSessionHandler(req: Request, res: Response) {

    try {
        
        // validate user credentials
        const user = await validatePassword(req.body);
        if(!user) {
            return res.status(401).send('Invalid credentials');
        }

        // create a session
        const session = await createSession(user._id, req.headers['user-agent'] || "");

        // create an access token
        const accessToken = signJwt(
            {...user, session: session._id},
            {expiresIn: config.get('accessTokenTtl')}
        )

        // create a refresh token

        // return access & refresh tokens



    } catch (error:any) {
        res.status(error.status||500).send(error.message);
    }

}