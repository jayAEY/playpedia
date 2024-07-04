import mongoose, { Schema, models } from "mongoose";

const usersSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String,
});

const UsersModel = models.users || mongoose.model("users", usersSchema);

export default UsersModel;
