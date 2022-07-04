
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
export const publicKey = process.env.JWT_PUBLIC_KEY;
export const privateKey = process.env.JWT_PRIVATE_KEY;

export const accessTokenTtl = "15m";
export const refreshTokenTtl = "30d";