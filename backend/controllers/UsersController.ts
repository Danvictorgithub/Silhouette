import dotenv from "dotenv";
dotenv.config();
import {Request, Response} from "express";
import prisma from "../configs/prisma";
import {body, validationResult} from "express-validator";
import bcrypt from "bcryptjs";
const User = prisma.user;

export async function index(req:Request, res:Response) {
    return await res.json(await User.findMany());   
}

export async function show(req:Request, res:Response) {
    const {id} = req.params;
    const user = await User.findUnique({where:{id:Number(id)}});
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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({message:errors.array()});
        }
        const {username,password} = req.body;
        if (await User.findFirst({where:{username:username}}) !== null) {
            return res.status(400).json({message:"Username already exists"});
        }
        else {
            bcrypt.hash(password,parseInt(process.env.SECRET_KEY!),async (err,hashedPassword) => {
              if (err) {
                return res.status(500).json({message:"Error hashing password"});
              }  
              else {
                const user = await User.create({data:{username:username,password:hashedPassword}});
                return res.status(201).json(user);
              }
            });
        }
    }
];