import express, {Express, Request, Response, Router} from 'express';
// import {index,showSome} from '../controllers/UsersController';
import userRoutes from "./UserRoutes";
import postRoutes from "./PostRoutes";
const router:Router = express.Router();

router.get('/', (req:Request, res:Response) => { return res.status(200).json({message:"Welcome to Silhouette API!"}); });
router.use('/users/',userRoutes);
router.use('/posts/',postRoutes);
export default router;