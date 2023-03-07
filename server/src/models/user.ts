import { InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "super_admin", "cashier", "mechanic"],
    },
  },
  { timestamps: true }
);

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
