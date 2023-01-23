import * as moongose from 'mongoose';
export interface UserDocument extends moongose.Document {
    email: string;
    name: string;
    password: string;
    fullName: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
export declare const userModel: moongose.Model<UserDocument, {}, {}, {}, any>;
