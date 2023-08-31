import express, {Express, Request, Response, Router} from 'express';
const router:Router = express.Router();

router.get('/', (req:Request, res:Response) => { return res.status(200).json({message:"Welcome to Silhouette API!"}); });


export default router;