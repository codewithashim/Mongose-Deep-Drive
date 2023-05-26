import express from "express";
import { getUsers,createUser,getUserById,getAdmin  } from "./user.controlar";

const router = express.Router();

router.get("/", getUsers);
router.get("/admin", getAdmin);    
router.get("/:id", getUserById);
router.post("/", createUser);



export default router;
