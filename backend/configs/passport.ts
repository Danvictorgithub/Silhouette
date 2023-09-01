import passport from "passport";
import LocalStrategy from "passport-local";
import {Strategy, ExtractJwt} from "passport-jwt";
import prisma from "../configs/prisma";
import bcrypt from "bcryptjs";
const User = prisma.user;

passport.use(new LocalStrategy.Strategy(async (username,password,cb) => {
    const user = await User.findFirst({where:{username:username}});
    if (user === null) {
        return cb(null,false, {message:"User not found"});
    }
    else {
        bcrypt.compare(password,user.password,(err,result) => {
            if (err) {
                return cb(err,false, {message:"Error comparing passwords"});
            }
            else if (result === false) {
                return cb(null,false, {message:"Incorrect password"})   ;
            }
            else {
                return cb(null,user, {message:"Logged in successfully"});
            }
        });
    }
}));

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}
passport.use(new Strategy(opts,async (jwt_payload,cb) => {
    const user = await User.findFirst({where: {username:jwt_payload.username}});
    if (user === null) {
        return cb(null,false, {message:"User not found"});
    }
    else {
        return cb(null,user, {message:"Logged in successfully"});
    }
}));

export default passport;



