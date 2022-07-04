
import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import {TokenPayLoad}from "../Interfaces/TokenInterfaces/TokenPayLoad";

export function authMiddleware(req:Request, res: Response, next:NextFunction){

    const {authorization } = req.headers;

    if(!authorization){
        return res.sendStatus(401);
    }

    const token = authorization.replace("Bearer", "").trim();
    
    try {
        const data = jwt.verify(token, "acoes");
        //console.log(data);
        const {id} = data as TokenPayLoad;
        req.userId = id;
        return next();
    } catch (error) {
        
        return res.sendStatus(401);
    }
}