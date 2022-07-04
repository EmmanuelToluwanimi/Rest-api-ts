import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (password:string) => Promise<boolean>;
}

export interface ISession extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    user: IUser["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}