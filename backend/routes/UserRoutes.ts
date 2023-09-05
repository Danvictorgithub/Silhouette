import express, {Express, Request, Response, Router} from 'express';
import passport from "passport";
import {index,show,create,login, edit} from '../controllers/UsersController';
import upload from '../configs/multer';

const router:Router = express.Router();
router.get("/",index);
router.get("/:id",show);
router.post("/create",create);
router.post("/login",login);
router.put("/edit",upload.single('img'),passport.authenticate('jwt',{session:false}),edit);
export default router;