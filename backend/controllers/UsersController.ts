import dotenv from "dotenv";
dotenv.config();
import {Request, Response} from "express";
import prisma from "../configs/prisma";
import {Result, ValidationError, body, validationResult} from "express-validator";
import bcrypt from "bcryptjs";
import passport from "passport";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import supabase from "../configs/supabase-storage";
import formatDateForFileName from "../helper/formatDateForFileName";
const Users = prisma.user;

declare module 'multer' {
    interface File {
        buffer: Buffer;
    }
}

export interface TokenInterface {
    user: {
        id: number,
        password: string,
        createdAt: string,
        updatedAt: string,
        profileImg: string,
    };
  }
export async function index(req:Request, res:Response) {
    return await res.json(await Users.findMany({select:{username:true}}));   
}

export async function show(req:Request, res:Response) {
    const {id} = req.params;
    const user:User|null = await Users.findUnique({where:{id:Number(id)}});
    if (user === null) {
        return res.status(404).json({message:"User not found"});
    }
    else {
        return res.json(user);
    }
}

export const create = [
    body("username").trim().isLength({min:3,max:20}).withMessage("Username must be between 3 and 20 characters"),
    body("password").trim().isLength({min:8,max:32}).withMessage("Password must be between 8 and 32 characters"),
    async (req:Request, res:Response) => {
        const errors:Result<ValidationError> = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({message:errors.array()});
        }
        const {username,password} = req.body;
        if (await Users.findFirst({where:{username:username}}) !== null) {
            return res.status(400).json({message:"Username already exists"});
        }
        else {
            bcrypt.hash(password,parseInt(process.env.SALT_KEY!),async (err,hashedPassword) => {
              if (err) {
                return res.status(500).json({message:"Error hashing password"});
              }  
              else {
                const user = await Users.create({data:{username:username,password:hashedPassword}});
                return res.status(201).json(user);
              }
            });
        }
    }
];

export async function login(req:Request,res:Response) {
    passport.authenticate("local", {session:false},(err: any,user: any,info: any) => {
        if (err || !user) {
            return res.status(400).json({message:info.message});
        }
        req.login(user, {session:false}, (err: any) => {
            if (err) {
                return res.status(400).json({message:err});
            }
            else {
                jwt.sign({user}, process.env.SECRET_KEY!, (err:any,token:any) => {
                    if (err) {
                        return res.status(400).json({message: "Something went wrong"});
                    }
                    return res.status(200).json({user,token});
                })
            }
        });
    })(req,res);
};

export const edit = [
    body('username').trim().isLength({min:3,max:20}).withMessage("Username must be between 3 and 20 characters"),
    body("password").trim().isLength({min:8,max:32}).withMessage("Password must be between 8 and 32 characters"),
    async (req:Request,res:Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({message:errors.array()});
        }
        const imgFlag = (req.file !== undefined) ? true : false;
        const token = req.headers.authorization!.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY!,async (err,decoded) => {
            if (err) {
                res.status(500).json({message:err.message});
            }
            const userObj:TokenInterface = decoded as TokenInterface;
            const {id} = userObj.user;
            if (imgFlag) {
                const uploadResult = await supabase.storage.from('UserStorage').upload(`public/${formatDateForFileName(new Date())}.${req.file!.originalname.split('.')[1]}`,req.file!.buffer);
                if (uploadResult.error) {
                    return res.status(400).json({message:uploadResult.error.message});
                }
                else {
                    const imgUrl = await supabase.storage.from("UserStorage").getPublicUrl(uploadResult.data.path);
                    await Users.update({where:{id:id},data:{
                        username:req.body.username,
                        password:req.body.password,
                        profileImg:imgUrl.data.publicUrl}}); 
                    return res.status(200).json({message:"User updated"});
                }
            }
            else {
                await Users.update({where:{id:id},data:{username:req.body.username,password:req.body.password}});
                return res.status(200).json({message:"User updated"});
            }
        });
    }
]