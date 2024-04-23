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
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ValidationError("Email and password are required");
  }

  const user = await findUserByEmail(email);

  if (!user) {
    throw new NotFoundError("User not found");
  }

  const passwordMatch = bcrypt.compareSync(password, user.passwordHash);

  if (!passwordMatch) {
    console.log("Password incorrect");
    throw new ForbiddenError("Password incorrect");
  }

  const token = jwt.sign(
    {
      userId: user.id,
      firstName: user.firstName,
      profilePhoto: user.profilePhoto,
      schoolId: user.schoolId,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: 86400,
    }
  );

  return token;
};
