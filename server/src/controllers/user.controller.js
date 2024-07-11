import { User } from "../models/user.model.js";

/* ##########CREATE A NEW USER########## */
export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    await userData.save();
    res
      .status(200)
      .json({ message: "User created successfully", data: userData });
  } catch (err) {
    if (err.name === "ValidationError") {
      for (let field in err.errors) {
        res.status(400).json({
          message: err.errors[field].message,
        });
      }
    } else {
      res.status(404).json({
        message: err.message,
      });
    }
  }
};

/* ##########GET LIST OF ALL USERS########## */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
};

/* ##########GET A PARTICULAR USER########## */
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    res
      .status(500)
      .json({ message: "Error fetching user", error: err.message });
  }
};

/* ##########UPDATE USER########## */
export const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Ensure new data is returned and validators are run
    );
    // If the user doesnot exists in the DB, checks using the  MongoDB ObjectId(_id)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", data: user });
  } catch (err) {
    console.log(JSON.stringify(err));
    // If the id passed is not a valid MongoDB ObjectId(_id), because findByIdAndUpdate checks only for MongoDB ObjectId(_id)
    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    // If validations fails during updating, because validators are runned during update
    if (err.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation failed", error: err.message });
    }
    res
      .status(500)
      .json({ message: "Error updating user", error: err.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    res
      .status(500)
      .json({ message: "Error deleting user", error: err.message });
  }
};
