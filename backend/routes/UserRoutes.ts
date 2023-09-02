import express, {Express, Request, Response, Router} from 'express';
import passport from "passport";
import {index,show,create,login, edit} from '../controllers/UsersController';

const router:Router = express.Router();
router.get("/",index);
router.get("/:id",show);
router.post("/create",create);
router.post("/login",login);
router.put("/edit",edit);
export default router;