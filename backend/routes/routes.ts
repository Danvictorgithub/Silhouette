import express, {Express, Request, Response, Router} from 'express';
// import {index,showSome} from '../controllers/UsersController';
import userRoutes from "./UserRoutes";
const router:Router = express.Router();

router.get('/', (req:Request, res:Response) => { return res.status(200).json({message:"Welcome to Silhouette API!"}); });
router.use('/users/',userRoutes);
export default router;