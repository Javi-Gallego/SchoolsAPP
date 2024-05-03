import { Request, Response } from "express";
import { HttpStatus } from "../../utils/handleError";
import { getUsersService } from "./user.service";


export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService(req);
    
        res.status(HttpStatus.OK).json({
          success: true,
          message: "Stages retrieved succesfully",
          data: users,
        });
      } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: "Can't retrieve stages",
          error: error,
        });
      }
};