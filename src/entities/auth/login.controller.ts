import { Request, Response } from "express"
import { HttpStatus, ValidationError, handleError } from "../../utils/handleError"
// import { getLoginService } from "./login.service.js"

export const login = async (req: Request, res: Response) => {
    try {
        // const token = await getLoginService(req)

        res.status(HttpStatus.OK).json({
            success: true,
            message: "User logged succesfully",
            // token: token
        })

    } catch (error) {
        if (error instanceof ValidationError) {
            return handleError(res, error.message, HttpStatus.BAD_REQUEST, error.name)
        }
        handleError(res, "Cant log user", HttpStatus.INTERNAL_SERVER_ERROR, "")
    }
}