import { saltRounds, port, dbUri, publicKey, privateKey, accessTokenTtl, refreshTokenTtl } from "../src/utils/constants"


export default {
    port,
    dbUri: dbUri(),
    saltRounds,
    publicKey,
    privateKey,
    accessTokenTtl,
    refreshTokenTtl
}