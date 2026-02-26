import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ayush:896988@cluster0.nqztmtu.mongodb.net/food-delivery",
    )
    .then(() => console.log("DB Connected"));
};
