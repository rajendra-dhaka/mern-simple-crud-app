import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (email) {
          const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          return emailRegx.test(email);
        },
        message: "Email format is Invalid!",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (password) {
          return password.length >= 8;
        },
        message: "Password must be atleast 8 char long",
      },
    },
    confirmPassword: {
      type: String,
      required: true,
      /*validate: {
        validator: function (confirmPassword) {
          return confirmPassword === this.password;
        },
        message: "Confirm Password not matched",
      },*/
    },
  },
  { timestamps: true }
);

// Middleware for handling save operations
userSchema.pre("save", function (next) {
  if (this.password !== this.confirmPassword) {
    return next(new Error("Confirm Password not matched"));
  }
  next();
});

// Middleware for handling update operations
userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (update.password && update.confirmPassword) {
    if (update.password !== update.confirmPassword) {
      return next(new Error("Confirm Password not matched"));
    }
  } else {
    delete update.confirmPassword; // Remove confirmPassword if password is not being updated
  }
  next();
});

export const User = mongoose.model("User", userSchema);
