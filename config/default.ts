import { saltRounds, port } from "../src/utils/constants"


export default {
    port,
    dbUri: 'mongodb://localhost:27017/rest-api-ts',
    saltRounds,
}