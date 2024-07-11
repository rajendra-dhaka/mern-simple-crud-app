import express from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controllers/user.controller.js";

export const route = express.Router();

route.post("/user", createUser);
route.get("/user", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/user/:id", updateUserById);
route.delete("/user/:id", deleteUserById);
