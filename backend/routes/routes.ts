import express, {Express, Request, Response, Router} from 'express';
import userRoutes from "./UserRoutes";
import postRoutes from "./PostRoutes";
import profileRoutes from "./ProfileRoutes";
const router:Router = express.Router();

router.get('/', (req:Request, res:Response) => { return res.status(200).json({message:"Welcome to Silhouette API!"}); });
router.use('/users/',userRoutes);
router.use('/posts/',postRoutes);
router.use('/profiles/',profileRoutes);
export default router;