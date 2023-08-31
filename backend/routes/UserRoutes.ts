import express, {Express, Request, Response, Router} from 'express';

import {index,show,create} from '../controllers/UsersController';

const router:Router = express.Router();
router.get("/",index);
router.get("/:id",show);
router.post("/create",create);

export default router;