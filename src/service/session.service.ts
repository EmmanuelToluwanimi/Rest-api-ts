import Session from "../models/session.model";
import { FilterQuery } from 'mongoose'
import {ISession} from '../interfaces'

export async function createSession(userId: string, userAgent: string) {
    try {
        const session = await Session.create({
            user: userId,
            userAgent,
        });

        return session.toJSON();
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function findSessions(query: FilterQuery<ISession>) {
    try {
        return Session.find(query).lean();
    } catch (error: any) {
        throw new Error(error.message);
    }
}