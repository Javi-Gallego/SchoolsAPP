import { NextFunction, Request, Response } from "express";

interface LocalTokenData {
  userId: number;
  firstName: string;
  profilePhoto: string;
  schoolId: number;
  roles: string[];
  schoolLogo: string;
  children: any[];
  iat: number;
  exp: number;
}

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // if (req.tokenData.roleName !== "super_admin" && req.tokenData.roleName !== "admin") {
    //   return res.status(403).json({
    //     success: false,
    //     message: "Unauthorized access",
    //   });
    // }
    const tokenData = req.tokenData as unknown as LocalTokenData;
    const isAdmin = tokenData.roles.some(role => role === 'super_admin' || role === 'admin');

    if(!isAdmin){
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "You don't have permissions",
    });
  }
};
