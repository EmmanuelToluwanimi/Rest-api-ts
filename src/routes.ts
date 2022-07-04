import {Express, Request, Response} from 'express'
import { createUserHandler } from './controller/user.controller';
import { ROUTES } from './utils/constants';
import validate from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';


const {
    HEALTHCHECK,
    REGISTER,
} = ROUTES;

function routes(app:Express) {
    app.get(HEALTHCHECK, (req: Request, res: Response) => res.sendStatus(200));

    app.post(REGISTER, validate(createUserSchema), createUserHandler);
}

export default routes;