import dotenv from "dotenv";
dotenv.config();
import {Request, Response} from "express";
import prisma from "../configs/prisma";
import {Result, ValidationError, body, validationResult} from "express-validator";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Post } from "@prisma/client";
export interface TokenInterface {
    user: {
        id: number,
        password: string,
        createdAt: string,
        updatedAt: string,
        profileImg: string,
    };
  }
const Posts = prisma.post

export async function index(req:Request, res:Response) {
    return res.json(await Posts.findMany());
}
export async function show(req:Request,res:Response) {
    const {id} = req.params;
    const post:Post|null = await Posts.findUnique({where:{id:Number(id)}});
    (post === null) ? res.status(404).json({message:"Post not found"}) : res.json(post);
}
export const create = [
    body("title").trim().isLength({min:3,max:64}).withMessage("Title must be between 3 and 20 characters"),
    body("content").trim().isLength({min:3,max:1000}).withMessage("Content must be between 3 and 1000 characters"),
    async (req:Request, res:Response) => {
        const errors:Result<ValidationError> = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({message:errors.array()});
        }
        const token = req.headers.authorization!.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY!,async (err,decoded) => {
            if (err) {
                return res.status(401).json({message:"Unauthorized"});
            }   
            const userObj:TokenInterface = decoded as TokenInterface;
            const newPost = await Posts.create({data:{title:req.body.title,content:req.body.content,authorId:userObj.user.id}});
            return res.status(201).json({message:"Post created",newPost});
        })
    }
];