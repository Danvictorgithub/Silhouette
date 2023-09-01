import dotenv from "dotenv";
dotenv.config();
import {Request, Response} from "express";
import prisma from "../configs/prisma";
import {Result, ValidationError, body, validationResult} from "express-validator";

const Posts = prisma.post

export async function index(req:Request, res:Response) {
    return res.json(await Posts.findMany());
}
