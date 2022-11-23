import * as mongoose from 'mongoose';

export const AdministratorSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  },
);
