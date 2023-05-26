import { Schema, model, Model } from "mongoose";
import { IUser, IUserMethods, UserModelType } from "./user.interface";

// type UserModelType = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModelType, IUserMethods>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String, required: false },
  gender: { type: String, required: true, enum: ["male", "female", "other"] },
  contactNumber: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ role: "admin" });
});

const UserModel = model<IUser, UserModelType>("User", userSchema);

export default UserModel;
