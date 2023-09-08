import dotenv from "dotenv";
dotenv.config();
import {NextFunction, Request, Response} from "express";
import prisma from "../configs/prisma";
import {Profile, User} from "@prisma/client"
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
const profiles = prisma.profile;

interface TokenInteface {
    user: User;
}

export async function index(req:Request,res:Response) {
    return res.json(await profiles.findMany());
};
export async function show(req:Request,res:Response) {
    const {id} = req.params
    const profile = await profiles.findUnique({where:{id:Number(id)}});
    (profile !== null) ? res.json(profile) : res.status(404).json({message:"Profile not found"});
};
export const create = [
    body('title').trim().isLength({min:8,max:48}).withMessage('Profile Title must be between 8 and 48 characters'),
    body('motto').trim().isLength({min:8,max:48}).withMessage('Profile Motto must be between 8 and 48 characters'),
    body('content').trim().isLength({min:8,max:196}).withMessage('Profile Content must be between 8 and 196 characters'),
    async (req:Request,res:Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(200).json({errors:errors.array()});
        }
        const token = req.headers.authorization!.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY!, async (err,decoded) => {
            if (err) {
                res.status(500).json({message:err.message});
            }
            const userObj:TokenInteface = decoded as TokenInteface;
            const {id} = userObj.user;
            const userProfile = await profiles.findUnique({where:{userId:Number(id)}});
            if (userProfile !== null) {
                res.status(200).json({message:"This user already have a profile",});
            }
            const profile = await profiles.create({data:{userId:Number(id),title:req.body.title,motto:req.body.motto,content:req.body.content}});
            return res.status(201).json({profile});
        });
    }
];

export const edit = [
    body('title').trim().isLength({min:8,max:48}).withMessage('Profile Title must be between 8 and 48 characters'),
    body('motto').trim().isLength({min:8,max:48}).withMessage('Profile Motto must be between 8 and 48 characters'),
    body('content').trim().isLength({min:8,max:196}).withMessage('Profile Content must be between 8 and 196 characters'),
    async (req:Request, res:Response) => {
        const errors = validationResult(req);
        const token = req.headers.authorization!.split('')[1];
        jwt.verify(token,process.env.SECRET_KEY!, async (err,decoded) => {
            if (err) {
                res.status(500).json({message:err.message});
            }
            const userObj:TokenInteface = decoded as TokenInteface;
            const {id} = userObj.user;
            await profiles.update({where:{id},data:{userId:Number(id),title:req.body.title,motto:req.body.motto,content:req.body.content}});
            return res.status(200).json({message:"Profile updated successfully"});
        });
    }
    
];