
export const ROUTES = {
    HEALTHCHECK: '/healthcheck',
    REGISTER: '/api/user/register',
}

export const saltRounds = 10;
export const port = process.env.PORT || 5000;
export const dbUri = ()=> {
    const _environment  = process.env.NODE_ENV

    if (_environment === 'production'){
        return process.env.MONGODB_URI
    } else {
        return 'mongodb://localhost:27017/rest-api-ts'
    }
}