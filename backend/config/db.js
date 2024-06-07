import mongoose from "mongoose";

export const connectDB =  async () =>{
    await mongoose.connect("mongodb+srv://jashwanth:200412@cluster0.zyvcjgo.mongodb.net/food-del")
    .then(
        console.log("DB Connected")
    );
}