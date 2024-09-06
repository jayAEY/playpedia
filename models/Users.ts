import mongoose, { Schema, models } from "mongoose";

const usersSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    password: { type: String },
    avatar: String,
    backlog: Array,
    completed: Array,
  },
  { timestamps: true }
);

const UsersModel = models.users || mongoose.model("users", usersSchema);

export default UsersModel;
