import {DocumentDefinition} from 'mongoose';
import User, {IUser} from '../models/user.model';

export async function createUser(input: DocumentDefinition<IUser>){

    try {
        return await User.create(input);
    } catch (error:any) {
        throw new Error(error);
    }
}

export async function getAll() {
    try {
        return await User.find();
    } catch (error:any) {
        throw new Error(error);
    }
}

export async function getById(id: string){

    try {
        return await User.findById(id);
    } catch (error:any) {
        throw new Error(error);
    }
}
 