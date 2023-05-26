import { IUser } from "./user.interface";
import UserModel from "./user.model";

const createUserToDB = async (payloade: IUser): Promise<IUser> => {
  const user = await new UserModel(payloade).save();
  return user;
};

const getUserFormDB = async () => {
  const users = await UserModel.find();
  return users;
};

const getUserByIdFromDB = async (payloade: string): Promise<IUser | null> => {
  const user = await UserModel.findOne(
    { id: payloade },
    {
      name: 1,
      email: 1,
      contactNumber: 1,
    }
  );

  return user;
};

const getAdminUserFromDB = async () =>{
  const admins = await UserModel.getAdminUser();
  return admins
}





export { getUserFormDB, createUserToDB, getUserByIdFromDB ,getAdminUserFromDB};
