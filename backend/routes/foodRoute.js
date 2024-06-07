import express from "express"
import { addFood, listFood, removefood } from "../controllers/foodController.js"
// to store images uploaded by admin user
import multer from "multer"

// express router it allows to use get , post and other methods
const  foodRouter = express.Router();


// Image Storage Engine

// this middleware to upload
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})
const upload = multer({storage:storage});

foodRouter.post("/add",upload.single("image"),addFood); 
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removefood);

export default foodRouter;
