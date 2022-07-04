import {DocumentDefinition} from 'mongoose';
import User from '../models/user.model';
import { IUser } from '../interfaces';

export async function createUser(input: DocumentDefinition<Omit<IUser, 'createdAt' | 'updatedAt' | 'comparePassword'>>){
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
 