import mongoose from "mongoose";


export interface IUser extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (password:string) => Promise<boolean>;
}