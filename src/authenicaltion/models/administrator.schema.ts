import * as mongoose from 'mongoose';

export const AdministratorSchema = new mongoose.Schema(
  {
    username: String,
    password: Number,
  },
  {
    timestamps: true,
  },
);
