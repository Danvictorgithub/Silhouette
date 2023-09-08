import express from 'express';
import { index,show, create, edit } from '../controllers/ProfilesController';
import passport from 'passport';
const router = express.Router();


router.get('/', index);
router.get('/:id',show);
router.post('/create', passport.authenticate('jwt',{session:false}),create);
router.put('/edit', passport.authenticate('jwt',{session:false}),edit);
export default router;