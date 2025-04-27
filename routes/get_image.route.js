import express from 'express';
import { getImage, RegisterUser,loginUser ,logoutUser} from '../controllers/get_.image.controller.js';

const router=express.Router();

router.get("/image",getImage);
router.post("/register",RegisterUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);

export default router;