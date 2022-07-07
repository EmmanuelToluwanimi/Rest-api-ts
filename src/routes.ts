import {Express, Request, Response} from 'express'
import { createUserHandler } from './controller/user.controller';
import { ROUTES } from './utils/constants';
import validate from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createUserSessionHandler, getUserSessionHandler, deleteUserSessionHandler } from './controller/session.controller';
import { createSessionSchema } from './schema/session.schema';
import { requireUser } from './controller/requireUser';


const {
    HEALTHCHECK,
    REGISTER,
    SESSIONS
} = ROUTES;

function routes(app:Express) {
    app.get(HEALTHCHECK, (req: Request, res: Response) => res.sendStatus(200));

    app.post(REGISTER, validate(createUserSchema), createUserHandler);

    app.post(SESSIONS, validate(createSessionSchema), createUserSessionHandler);
    app.get(SESSIONS, requireUser, getUserSessionHandler);
    app.delete(SESSIONS, requireUser, deleteUserSessionHandler);

    
}

export default routes;