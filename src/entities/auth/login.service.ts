import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request } from "express";
import {
  ForbiddenError,
  NotFoundError,
  ValidationError,
} from "../../utils/handleError";
import { findUserByEmail } from "./login.repository";

export const getLoginService = async (req: Request) => {
  console.log("Login service");
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ValidationError("Email and password are required");
  }

  const user = await findUserByEmail(email);
  console.log("vuelta a service")
  if (!user) {
    throw new NotFoundError("User not found");
  }

  const passwordMatch = bcrypt.compareSync(password, user.passwordHash);
  console.log("okey")
  if (!passwordMatch) {
    console.log("Password incorrect");
    throw new ForbiddenError("Password incorrect");
  }
  console.log(user)
  const token = jwt.sign(
    {
      userId: user.id,
      firstName: user.firstName,
      profilePhoto: user.profilePhoto,
      schoolId: user.schoolId,
      roles: user.roles.map((userRole) => userRole.role.name),
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: 86400,
    }
  );

  return token;
};
