import { Request, Response } from "express"
import { getRegisterService } from "./register.service"

export const register = async (req: Request, res: Response) => {
    
    try {
        const newUser = await getRegisterService(req)
        
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Can't create user",
            error: error
        })
    } 
}