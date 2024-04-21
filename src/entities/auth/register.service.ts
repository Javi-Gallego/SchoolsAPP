import bcrypt from "bcrypt"
import { ValidationError } from "../../utils/handleError"
import { createUser, emailInUse } from "./register.repository"
import { Request } from "express"

export const getRegisterService = async (req: Request) => {

    try {
        const { firstName, lastName, secondLastName,
            birthday, phone, address, email, password, schoolId } = req.body

        if (!firstName || !lastName || !secondLastName ||
            !birthday || !address || !email || !password || !schoolId) {
            throw new ValidationError("User name, email and password are required")
        }
    
        if (firstName.length < 3 || firstName.length > 10) {
            throw new ValidationError("User name must contain between 3 and 10 characters")
        }
        
        if (password.length < 6 || password.length > 10) {
            throw new ValidationError("Password must contain between 6 and 10 characters")
        }
    
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    
        if (!validEmail.test(email)) {
            throw new ValidationError("Email format invalid")
        }
        
        await emailInUse(email) 
    
        const passwordEncrypted = bcrypt.hashSync(password, 5)
    
        const newUser = await createUser(firstName, lastName, secondLastName, birthday, address, email, passwordEncrypted, schoolId)
    
        return newUser 
    } catch (error) {
        
    }
}