import express, {Router} from "express";
import {index,show,create} from "../controllers/PostsController";
import passport from "passport";
const router:Router = express.Router();
router.get("/",index);
router.get("/:id",show);
router.post("/create",passport.authenticate("jwt",{session:false}),create);

export default router;