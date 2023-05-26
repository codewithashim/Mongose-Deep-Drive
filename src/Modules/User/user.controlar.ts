import { Request, Response, NextFunction } from "express";
import {
  createUserToDB,
  getAdminUserFromDB,
  getUserByIdFromDB,
  getUserFormDB,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.body;
    const newUser = await createUserToDB(user);

    res.status(200).json({
      success: true,
      message: `User created successfully!`,
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUserFormDB();
    res.status(200).json({
      success: true,
      message: `User Get successfully!`,
      data: users || null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const users = await getUserByIdFromDB(userId);
    res.status(200).json({
      success: true,
      message: `User Get successfully!`,
      data: users || null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getAdminUserFromDB();
    res.status(200).json({
      success: true,
      message: `Admin Get successfully!`,
      data: user || null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
