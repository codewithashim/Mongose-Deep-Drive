import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "Student";
  email: string;
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female" | "other";
  contactNumber: string;
  presentAddress: string;
  permanentAddress: string;
}

export interface IUserMethods {
  fullName(): string;
}


export interface UserModelType extends Model<IUser, {}, IUserMethods> {
  getAdminUser(): Promise<HydratedDocument<IUser, IUserMethods>>;
}



